# SimpleTypeWriter
A small project that shows typewriter effect

## Instalation
``git clone`` this repo

## Usage
```js
import TypeWriter from './TypeWriter';
```
```js
<TypeWriter 
  elements={["String","String2","String3"]}
  speed={300}
  cursorType={"lodash"}
  color={"blue"}
  font={"monospace"}
  size={50}
/>
```

## Build and run project
``npm install`` download packages
``npm start`` start server application

## Test
``npm test`` run this command to show tests

## Properties
Name | Type | Description | Default behaviour
--- | --- | --- | ---
`elements` | array | Simple string table | isRequired
`speed` | number | Choose the speed in ms | 500 
`cursorType` | string | You have two variant: pipe / lodash  | pipe
`color` | string | This specifies the color of the text | blue
`font` | string | choose font name from list: Amatic SC / Archivo Black / Francois One / Pacifico / Roboto Mono / Roboto Slab | arial
`size` | number | Choose the font size  | 40
