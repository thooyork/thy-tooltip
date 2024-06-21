# ThyTooltip

This is a small text-tooltip 💬 web component, that integrates unobtrusively in your web application.

![Screenshot](https://smart-sign.com/npm/thy-tooltip/screenshot.png)

## Features
 - small
 - lightweight
 - framework agnostic (like any other true web component)
 - integrates for example with vanilla, vue, react, angular, svelte, solid.js and many more

## Implementation Examples
```
    // default
    <thy-tooltip text="This ThyTooltip is awesome !">Trigger Text</thy-tooltip>

    // Positions
    <thy-tooltip position="right" text="This ThyTooltip is awesome !">Right</thy-tooltip>
    <thy-tooltip position="top" text="This ThyTooltip is awesome !">Top</thy-tooltip>
    <thy-tooltip position="bottom" text="This ThyTooltip is awesome !">Bottom</thy-tooltip>
    <thy-tooltip position="left" text="This ThyTooltip is awesome !">Left</thy-tooltip>
    
    // cursor animation
    <thy-tooltip animation animationspeed="45" text="This ThyTooltip is awesome !">animated</thy-tooltip>
    <thy-tooltip animation animationspeed="45" animationloops="1" text="This ThyTooltip is awesome !">animated once</thy-tooltip>
```
## Installation
```
npm install thy-tooltip
```

## Usage

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My fancy app</title>
    <script type="module">import 'thy-tooltip';</script>
  </head>
  <body>
    <thy-tooltip text="Tooltip text">hover me</thy-tooltip> // see Implementation Examples above
  </body>
</html>
```

## Attributes
The following attributes are available:
| attribute name | type | default value | info |
| --- | --- | --- | --- |
| ``` opened ``` | ``` boolean ``` | ```false```| wether it is visible or not |
| ``` text ``` | ``` string ``` | ``` "" ```| the text to show inside the tooltip |
| ``` position ``` | ``` string ``` | ``` top ```| top, bottom, right or left |
| ``` offset ``` | ``` number ``` | ``` 0 ```| offset in px from trigger text |
| ``` arrowsize ``` | ``` number ``` | ``` 5 ```| arrow size in px |
| ``` showon ``` | ``` string ``` | ``` enter ```| event to trigger show, either enter or click |
| ``` hideon ``` | ``` string ``` | ``` leave ```| event to trigger hide, either leave or click |
| ``` animation ``` | ``` boolean ``` | ``` false ```| typewriter style animation |
| ``` animationloops ``` | ``` number ``` | ``` Infinity ```| number of animation cycles |
| ``` animationspeed ``` | ``` number ``` | ``` 35 ```| typewriter animationspeed in ms  |

## Styling
To style the tooltips encapsulated shadowDom, use the following css variables:


| variable name | default value | css property
| --- | --- | --- |
| --tt-color | #333333 | color |
| --tt-bg-color | #FFFFFF | background-color |
| --tt-border-width | 1px | border-width |
| --tt-border-style | solid | border-style |
| --tt-border-color | #333333 | border-color |
| --tt-border-radius | 3px | border-radius |
| --tt-shadow | 2px 2px 5px rgba(0,0,0,0.3) | box-shadow |
| --tt-font-family | sans-serif | font-family |
| --tt-font-size | 12px | font-size |
| --tt-font-weight | normal | font-weight |
| --tt-width | auto | width |
| --tt-padding | 7px 5px 5px 5px | padding |
| --tt-wrap | nowrap | white-space |
| --tt-transition-duration-on | 0.5s | transition-duration (enter/click) |
| --tt-transition-duration-off | 0.5s | transition-duration (leave/click) |



## Demo (or it didn't happen)
[VISIT DEMO SITE](https://smart-sign.com/npm/thy-tooltip/)

## ✨ Have fun! ✨💬
