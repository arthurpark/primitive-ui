# About element-ui

element-ui is set of low level React components that can be used to build more complex components. It's powered by excellent Tailwild CSS. It has a simple goal; build composable UI faster, and with less error. It's written in TypeScript to provide correctness and code completion. This was created to solve some of pain potins while I was building a React app with uitility-first CSS.

If you're curious about philosophy behind uitility-first CSS, I highly recommend these 2 articles:

- [About HTML semantics and front-end architecture](http://nicolasgallagher.com/about-html-semantics-front-end-architecture/) by Nicolas Gallagher (Creator of react-native-web)
- [CSS Utility Classes and "Separation of Concerns"](https://adamwathan.me/css-utility-classes-and-separation-of-concerns/) by Adam Wathan (Creator of Tailwind CSS)

Here are some of the disadvantages I experienced:

- It is easy to use conflicting class names.
  e.g.

  ```javascript
  function FancyBox() {
    return (
      // Did you notice that there are 2 class names that affect width? `w-full` and `w-9`
      // Which one would be applied on this div?
      // It's all based on where these classes are defined in CSS file because they have the
      // same specificity.
      <div className="w-full flex-none text-sm font-medium text-gray-500 mt-2 w-9">
        Some text
      </div>
    );
  }
  ```

  ```javascript
  function FancyBox() {
    return (
      // Can you tell what padding will be applied to this div?
      <div className="p-4 py-3 pb-9">Some text</div>
    );
  }
  ```

- At it's core, `className` prop is just a concatenated string, which means that it is easy to make mistake (typo). This is not a utility-first CSS specific issue, but inherent to any approach that directly uses class names to style.

  ```javascript
  function FancyBox() {
    return (
      // Tailwind CSS experts, how many mistakes can you find here?
      <div className="w-fool flex-none text-sm font-medieum taxt-gray-500 mt-2">
        Some text
      </div>
    );
  }
  ```

- It is easy to introduce complex branching logics for style when building a component with multiple variants.

  ```javascript
  function FancyBox({ variant = 'A', children }) {
    let className = 'w-full flex-none text-sm font-medium text-gray-500 mt-2';

    // It is pretty easy to introduce branching like this. This can be refactored to extract
    // shared class names into a separate variable, but does that make it more readable?
    if (variant === 'B') {
      className = 'w-1/2 flex-none text-sm font-medium text-gray-500 mt-2';
    } else if (variant === 'C') {
      className = 'w-1/2 h-2 flex-none text-sm font-medium text-gray-500 mt-2';
    }

    return <div className={className}>{children}</div>;
  }

  // and then this gets refactored to
  function FancyBox({ variant = 'A', ...props }) {
    switch (variant) {
      case 'B':
        return <FancyBoxB {...props} />;
      case 'C':
        return <FancyBoxC {...props} />;
      case 'A':
      default:
        return <FancyBoxA {...props} />;
    }
  }

  function FancyBoxA({ children }) {
    return (
      <div className="w-full flex-none text-sm font-medium text-gray-500 mt-2">
        {children}
      </div>
    );
  }

  function FancyBoxB({ children }) {
    return (
      <div className="w-1/2 flex-none text-sm font-medium text-gray-500 mt-2">
        {children}
      </div>
    );
  }

  function FancyBoxC({ children }) {
    return (
      <div className="w-1/2 h-2 flex-none text-sm font-medium text-gray-500 mt-2">
        {children}
      </div>
    );
  }
  ```

I've arrived at the conclusion that one way to solve these problems is introducing intermediary layer: a set of low level React components for styling that help you build more correct, conflict free styles via fully typed props. I've taken this idea from prior arts such as [system-ui](https://system-ui.com/). [Braid Design System](https://seek-oss.github.io/braid-design-system/), and [React Native](https://reactnative.dev/) also influenced this design.

We can rewrite `<FancyBox>` with `<Box>` component which accepts style props such as padding/margin/background and `<Text>` component that accepts props like font size/color. Let's build a component with `<Box>` and `<Text>`. Assumes `<FancyBox>` receives text as children.

```javascript
function FancyBox({ children }) {
  return (
    <Box
      // By default (when this prop is not passed), Box is rendered as div. With `element` prop,
      // <Box> can be rendered as other HTML element.
      element="div"
      // With TypeScript, we can use union types for `width` prop and make sure user can only use
      // values specified in that union type. This will also help with auto-complete
      // which can boost productivity
      width="full"
      flex="none"
      // Instead of using props like mt={2}, we use more readable `margin` and take object here.
      // With TypeScript, we can make this prop errors when user is using conflicting values,
      // such as { top: 2, y: 3 }
      // It can also accept soemthing like 2, which will be applied to all sides.
      margin={{ top: 2 }}
      // Box allows `className` so user can set any className in addition to these style props.
      // However, this is for escape hatch and by using this, user needs to know that conflict can happen
      className={''}
    >
      {/* I like how React Native separates <View> and <Text> */}
      <Text fontSize="sm" fontWeight="medium" color="gray-500">
        {children}
      </Text>
    </Box>
  );
}
```

Let's make `<FancyBox>` render differently based on `variant` prop.

```javascript
function BaseFancyBox(props) {
  const { children } = props;
  return (
    <Box
      element={props.element || 'div'}
      width={props.width ?? 'full'}
      height={props.height}
      flex="none"
      margin={{ top: 2 }}
    >
      <Text fontSize="sm" fontWeight="medium" color="gray-500">
        {children}
      </Text>
    </Box>
  );
}

function FancyBox({ variant = 'A', ...props }) {
  switch (variant) {
    case 'B':
      return <BaseFancyBox width={'1/2'} {...props} />;
    case 'C':
      return <BaseFancyBox width={'1/2'} height={2} {...props} />;
    case 'A':
    default:
      return <BaseFancyBox {...props} />;
  }
}
```

What are advantages of using `<Box>` and `<Text>`?

- It's more readable.
- When using TypeScript, type checking eliminates use of invalid values and conflicts.
- It provides better composability. It's easier to apply different width/height in the example compared to when `<Box>` was not available.

Given these benefits, there are some philosophy behind element-ui:

- Always provide fully typed values for supported style
- Group related styles to a single prop (e.g. padding/margin/background)
- Extend elements and provide excape hatch (className): `className` prop is a good example for this, but applies to anything in element-ui. To act as a building block, element-ui has to support all raw HTML element props so user doesn't need to eject when user needs unsupported feature.

Non-goals:

- Support every single class name from Tailwind CSS: This makes implementation complex. element-ui will try to stay simple and small. More mappings will be added as we iterate but it probably won't support 100%.
- Provide full list of component library: element-ui will initially focus on building blocks so you can make your own components and component library. Even if a component library will be built, element-ui's elements will be usable independently of the component library.

There are some things I'd like to add, but nothing has been planned yet:

- Support for customized Tailwind CSS
- Support for JIT compiler for Tailwind CSS
