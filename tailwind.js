/*

Tailwind - The Utility-First CSS Framework

A project by Adam Wathan (@adamwathan), Jonathan Reinink (@reinink),
David Hemphill (@davidhemphill) and Steve Schoger (@steveschoger).

Welcome to the Tailwind config file. This is where you can customize
Tailwind specifically for your project. Don't be intimidated by the
length of this file. It's really just a big JavaScript object and
we've done our very best to explain each section.

View the full documentation at https://tailwindcss.com.

/*
|-------------------------------------------------------------------------------
| Colors                                    https://tailwindcss.com/docs/colors
|-------------------------------------------------------------------------------
|
| Here you can specify the colors used in your project. To get you started,
| we've provided a generous palette of great looking colors that are perfect
| for prototyping, but don't hesitate to change them for your project. You
| own these colors, nothing will break if you change everything about them.
|
| We've used literal color names ("red", "blue", etc.) for the default
| palette, but if you'd rather use functional names like "primary" and
| "secondary", or even a numeric scale like "100" and "200", go for it.
|
*/

let colors = {
  'transparent': 'transparent',
  'black': '#22292f',
  'white': '#ffffff',

  'teal-800': '#0a3e42',
  'teal-700': '#065a61',
  'teal-600': '#087d85',
  'teal-500': '#0a8991',
  'teal-400': '#38adb3',
  'teal-300': '#3ac6ce',
  'teal-200': '#85c7cb',
  'teal-100': '#e3f6f7',

  'earth-900': '#131313',
  'earth-800': '#635257',
  'earth-700': '#826f75',
  'earth-500': '#ad9c94',
  'earth-400': '#d2d1c5',
  'earth-300': '#dadcd3',
  'earth-200': '#f0f3e9',
  'earth-100': '#fbfef3',

  'warm-800': '#c82c0b',
  'warm-600': '#e0310e',
  'warm-400': '#ff6b2b',
  'warm-200': '#f0c11c',
  'warm-100': '#f6dc7e',

  'purple-900': '#201321',
  'purple-800': '#321c34',
  'purple-700': '#442547',
}

module.exports = {

  /*
  |-----------------------------------------------------------------------------
  | Colors                                  https://tailwindcss.com/docs/colors
  |-----------------------------------------------------------------------------
  |
  | The color palette defined above is also assigned to the "colors" key of
  | your Tailwind config. This makes it easy to access them in your CSS
  | using Tailwind's config helper. For example:
  |
  | .error { color: config('colors.red') }
  |
  */

  colors: colors,


  /*
  |-----------------------------------------------------------------------------
  | Screens                      https://tailwindcss.com/docs/responsive-design
  |-----------------------------------------------------------------------------
  |
  | Screens in Tailwind are translated to CSS media queries. They define the
  | responsive breakpoints for your project. By default Tailwind takes a
  | "mobile first" approach, where each screen size represents a minimum
  | viewport width. Feel free to have as few or as many screens as you
  | want, naming them in whatever way you'd prefer for your project.
  |
  | Tailwind also allows for more complex screen definitions, which can be
  | useful in certain situations. Be sure to see the full responsive
  | documentation for a complete list of options.
  |
  | Class name: .{screen}:{utility}
  |
  */

  screens: {
    'tyd': {'max': '23.9375em'}, // 399px
    'ty': '25em', // 400px
    'xsd': {'max': '37.4375em'}, // 599px
    'xs': '37.5em', // 600px
    'smd': {'max': '47.9375em'}, // 767px
    'sm': '48em', // 768px
    'navd': {'max': '53.9375em'}, // 863px
    'nav': '54em', // 864px
    // 'mdd': {'max': '59.9375em'}, // 959px
    'md': '60em', // 960px
    'lgd': {'max': '63.9375em'}, // 1023px
    'lg': '64em', // 1024px
    // 'xld': {'max': '79.9375em'}, // 1279px
    // 'xl': '80em', // 1280px
  },


  /*
  |-----------------------------------------------------------------------------
  | Fonts                                    https://tailwindcss.com/docs/fonts
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your project's font stack, or font families.
  | Keep in mind that Tailwind doesn't actually load any fonts for you.
  | If you're using custom fonts you'll need to import them prior to
  | defining them here.
  |
  | By default we provide a native font stack that works remarkably well on
  | any device or OS you're using, since it just uses the default fonts
  | provided by the platform.
  |
  | Class name: .font-{name}
  |
  */

  fonts: {
    'sans': [
      'UniNeue',
      'Helvetica Neue',
      'sans-serif',
    ],
    'display': [
      'Roboto Mono',
      'UniNeue',
      'Helvetica Neue',
      'sans-serif',
    ],
    'serif': [
      'TTJenevers',
      'Georgia',
      'serif',
    ],
  },


  /*
  |-----------------------------------------------------------------------------
  | Text sizes                         https://tailwindcss.com/docs/text-sizing
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your text sizes. Name these in whatever way
  | makes the most sense to you. We use size names by default, but
  | you're welcome to use a numeric scale or even something else
  | entirely.
  |
  | By default Tailwind uses the "rem" unit type for most measurements.
  | This allows you to set a root font size which all other sizes are
  | then based on. That said, you are free to use whatever units you
  | prefer, be it rems, ems, pixels or other.
  |
  | Class name: .text-{size}
  |
  */

  textSizes: {
    '10': '.625rem',  // 10px
    '12': '.75rem',   // 12px
    '13': '.8125rem', // 13px
    '14': '.875rem',  // 14px
    '16': '1rem',     // 16px
    '18': '1.125rem', // 18px
    '20': '1.25rem',  // 20px
    '24': '1.5rem',   // 24px
    '30': '1.875rem', // 30px
    '36': '2.25rem',  // 36px
    '48': '3rem',     // 48px
    '64': '4rem',     // 64px
    '96': '6rem',     // 96px
    '120': '7.5rem',  // 120px
    '250': '15.625rem', //250px
  },


  /*
  |-----------------------------------------------------------------------------
  | Font weights                       https://tailwindcss.com/docs/font-weight
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your font weights. We've provided a list of
  | common font weight names with their respective numeric scale values
  | to get you started. It's unlikely that your project will require
  | all of these, so we recommend removing those you don't need.
  |
  | Class name: .font-{weight}
  |
  */

  fontWeights: {
    'hairline': 100,
    'thin': 200,
    'light': 300,
    'normal': 400,
    'medium': 500,
    'semibold': 600,
    'bold': 700,
    'heavy': 800,
    'black': 900,
  },


  /*
  |-----------------------------------------------------------------------------
  | Leading (line height)              https://tailwindcss.com/docs/line-height
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your line height values, or as we call
  | them in Tailwind, leadings.
  |
  | Class name: .leading-{size}
  |
  */

  leading: {
    'none': 1,
    'tight': 1.25,
    'normal': 1.5,
    'loose': 2,
  },


  /*
  |-----------------------------------------------------------------------------
  | Tracking (letter spacing)       https://tailwindcss.com/docs/letter-spacing
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your letter spacing values, or as we call
  | them in Tailwind, tracking.
  |
  | Class name: .tracking-{size}
  |
  */

  tracking: {
    'tight': '-0.04em',
    'normal': '0',
    'slight': '0.04em',
    'wide': '0.14em',
  },


  /*
  |-----------------------------------------------------------------------------
  | Text colors                         https://tailwindcss.com/docs/text-color
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your text colors. By default these use the
  | color palette we defined above, however you're welcome to set these
  | independently if that makes sense for your project.
  |
  | Class name: .text-{color}
  |
  */

  textColors: colors,


  /*
  |-----------------------------------------------------------------------------
  | Background colors             https://tailwindcss.com/docs/background-color
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your background colors. By default these use
  | the color palette we defined above, however you're welcome to set
  | these independently if that makes sense for your project.
  |
  | Class name: .bg-{color}
  |
  */

  backgroundColors: global.Object.assign(
    {
      'purple-700-90': 'rgba(68, 37, 71, 0.9)'
    },
    colors
  ),


  /*
  |-----------------------------------------------------------------------------
  | Background sizes               https://tailwindcss.com/docs/background-size
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your background sizes. We provide some common
  | values that are useful in most projects, but feel free to add other sizes
  | that are specific to your project here as well.
  |
  | Class name: .bg-{size}
  |
  */

  backgroundSize: {
    'auto': 'auto',
    'cover': 'cover',
    'contain': 'contain',
  },


  /*
  |-----------------------------------------------------------------------------
  | Border widths                     https://tailwindcss.com/docs/border-width
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your border widths. Take note that border
  | widths require a special "default" value set as well. This is the
  | width that will be used when you do not specify a border width.
  |
  | Class name: .border{-side?}{-width?}
  |
  */

  borderWidths: {
    default: '1px',
    '0': '0',
    '2': '2px',
    '16': '16px',
  },


  /*
  |-----------------------------------------------------------------------------
  | Border colors                     https://tailwindcss.com/docs/border-color
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your border colors. By default these use the
  | color palette we defined above, however you're welcome to set these
  | independently if that makes sense for your project.
  |
  | Take note that border colors require a special "default" value set
  | as well. This is the color that will be used when you do not
  | specify a border color.
  |
  | Class name: .border-{color}
  |
  */

  borderColors: global.Object.assign(
    {
      default: colors['gray-light'],
      'faded': 'rgba(218,220,211, 0.3)' // earth-300 at 30% opacity
    },
    colors
  ),


  /*
  |-----------------------------------------------------------------------------
  | Border radius                    https://tailwindcss.com/docs/border-radius
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your border radius values. If a `default` radius
  | is provided, it will be made available as the non-suffixed `.rounded`
  | utility.
  |
  | If your scale includes a `0` value to reset already rounded corners, it's
  | a good idea to put it first so other values are able to override it.
  |
  | Class name: .rounded{-side?}{-size?}
  |
  */

  borderRadius: {
    'none': '0',
    default: '2px',
    'circle': '50%',
  },


  /*
  |-----------------------------------------------------------------------------
  | Width                                    https://tailwindcss.com/docs/width
  |-----------------------------------------------------------------------------
  */

  width: {
    'auto': 'auto',
    '1/4' : '25%',
    '1/3': '33.333%',
    '1/2': '50%',
    '2/3': '66.666%',
    '3/4': '75%',
    'full': '100%',
    '22': '22px',
    '25': '25px',
    '32': '32px',
    '48': '48px',
    '175': '175px',
    '325': '325px',
    '415': '415px',
  },


  /*
  |-----------------------------------------------------------------------------
  | Height                                  https://tailwindcss.com/docs/height
  |-----------------------------------------------------------------------------
  */

  height: {
    '0': '0',
    'full': '100%',
    '22': '22px',
    '25': '25px',
    '32': '32px',
    '48': '48px',
  },


  /*
  |-----------------------------------------------------------------------------
  | Minimum width                        https://tailwindcss.com/docs/min-width
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your minimum width utility sizes. These can
  | be percentage based, pixels, rems, or any other units. We provide a
  | couple common use-cases by default. You can, of course, modify
  | these values as needed.
  |
  | Class name: .min-w-{size}
  |
  */

  minWidth: {
    '0': '0',
    'full': '100%',
  },


  /*
  |-----------------------------------------------------------------------------
  | Minimum height                      https://tailwindcss.com/docs/min-height
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your minimum height utility sizes. These can
  | be percentage based, pixels, rems, or any other units. We provide a
  | few common use-cases by default. You can, of course, modify these
  | values as needed.
  |
  | Class name: .min-h-{size}
  |
  */

  minHeight: {
    '0': '0',
    'full': '100%',
    'screen': '100vh',
  },


  /*
  |-----------------------------------------------------------------------------
  | Maximum width                        https://tailwindcss.com/docs/max-width
  |-----------------------------------------------------------------------------
  */

  maxWidth: {
    '180': '180px',
    '275': '275px',
    '300': '300px',
    '340': '340px',
    '375': '375px',
    '450': '450px',
    '525': '525px',
    '575': '575px',
    '650': '650px',
    '750': '750px',
    '800': '800px',
    '840': '840px',
    '1000': '1000px',
    '1200': '1200px',
    '1280': '1280px',
  },


  /*
  |-----------------------------------------------------------------------------
  | Maximum height                      https://tailwindcss.com/docs/max-height
  |-----------------------------------------------------------------------------
  */

  maxHeight: {
    'screen': '100vh',
    '90vh': '90vh',
  },


  /*
  |-----------------------------------------------------------------------------
  | Padding                                https://tailwindcss.com/docs/padding
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your padding utility sizes. These can be
  | percentage based, pixels, rems, or any other units. By default we
  | provide a sensible rem based numeric scale plus a couple other
  | common use-cases like "1px". You can, of course, modify these
  | values as needed.
  |
  | Class name: .p{side?}-{size}
  |
  */

  padding: {
    '0': '0',
    '2': '2px',
    '4': '4px',
    '6': '6px',
    '8': '8px',
    '12': '12px',
    '16': '16px',
    '24': '24px',
    '32': '32px',
    '48': '48px',
    '72': '72px',
    '80': '80px',
    '96': '96px',
    '160':'160px',
    '200':'200px',
  },


  /*
  |-----------------------------------------------------------------------------
  | Margin                                  https://tailwindcss.com/docs/margin
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your margin utility sizes. These can be
  | percentage based, pixels, rems, or any other units. By default we
  | provide a sensible rem based numeric scale plus a couple other
  | common use-cases like "1px". You can, of course, modify these
  | values as needed.
  |
  | Class name: .m{side?}-{size}
  |
  */

  margin: {
    'auto': 'auto',
    '0': '0',
    '2': '2px',
    '4': '4px',
    '8': '8px',
    '12': '12px',
    '16': '16px',
    '24': '24px',
    '32': '32px',
    '48': '48px',
    '72': '72px',
    '80': '80px',
    '96': '96px',
  },


  /*
  |-----------------------------------------------------------------------------
  | Negative margin                https://tailwindcss.com/docs/negative-margin
  |-----------------------------------------------------------------------------
  */

  negativeMargin: {
    '0': '0',
    '8': '8px',
    '16': '16px',
    '32': '32px',
    '40': '40px',
    '48': '48px',
    '96': '96px',
    '320': '320px',
  },


  /*
  |-----------------------------------------------------------------------------
  | Shadows                                https://tailwindcss.com/docs/shadows
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your shadow utilities. As you can see from
  | the defaults we provide, it's possible to apply multiple shadows
  | per utility using comma separation.
  |
  | If a `default` shadow is provided, it will be made available as the non-
  | suffixed `.shadow` utility.
  |
  | Class name: .shadow-{size?}
  |
  */

  shadows: {
    default: '0px 2px 3px rgba(99, 82, 87, 0.2)',
    'inner': 'inset 0px 2px 2px rgba(0, 0, 0, 0.1)',
  },


  /*
  |-----------------------------------------------------------------------------
  | Z-index                                https://tailwindcss.com/docs/z-index
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your z-index utility values. By default we
  | provide a sensible numeric scale. You can, of course, modify these
  | values as needed.
  |
  | Class name: .z-{index}
  |
  */

  zIndex: {
    'auto': 'auto',
    '-3': -3,
    '-2': -2,
    '-1': -1,
    '1': 1,
    '2': 2,
    'max': 999,
  },


  /*
  |-----------------------------------------------------------------------------
  | Opacity                                https://tailwindcss.com/docs/opacity
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your opacity utility values. By default we
  | provide a sensible numeric scale. You can, of course, modify these
  | values as needed.
  |
  | Class name: .opacity-{name}
  |
  */

  opacity: {
    '0': '0',
    '15': '.15',
    '25': '.25',
    '50': '.5',
    '75': '.75',
    '90': '.9',
    '95': '.95',
    '100': '1',
  },


  /*
  |-----------------------------------------------------------------------------
  | SVG fill                                   https://tailwindcss.com/docs/svg
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your SVG fill colors. By default we just provide
  | `fill-current` which sets the fill to the current text color. This lets you
  | specify a fill color using existing text color utilities and helps keep the
  | generated CSS file size down.
  |
  | Class name: .fill-{name}
  |
  */

  svgFill: {
    'current': 'currentColor',
    'none': 'none',
  },


  /*
  |-----------------------------------------------------------------------------
  | SVG stroke                                 https://tailwindcss.com/docs/svg
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your SVG stroke colors. By default we just provide
  | `stroke-current` which sets the stroke to the current text color. This lets
  | you specify a stroke color using existing text color utilities and helps
  | keep the generated CSS file size down.
  |
  | Class name: .stroke-{name}
  |
  */

  svgStroke: {
    'current': 'currentColor',
    'none': 'none',
    'earth-400': colors['earth-400'],
    'warm-600': colors['warm-600'],
  },


  /*
  |-----------------------------------------------------------------------------
  | Transition Duration
  |-----------------------------------------------------------------------------
  | All four transition properties accept a `default` key, which is applied
  | using `.transition`.
  |
  | Class name: .transition-{duration}
  */

  transitionDuration: {
    faster: '.1s',
    fast: '.2s',
    default: '.3s',
    slow: '.5s',
    slower: '.8s',
  },


  /*
  |-----------------------------------------------------------------------------
  | Transition Property
  |-----------------------------------------------------------------------------
  | All four transition properties accept a `default` key, which is applied
  | using `.transition`.
  |
  | Class name: .transition-property-{property}
  */

  transitionProperty: {
    default: 'all',
    transform: 'transform',
  },


  /*
  |-----------------------------------------------------------------------------
  | Transition Timing Function
  |-----------------------------------------------------------------------------
  | All four transition properties accept a `default` key, which is applied
  | using `.transition`.
  |
  | Class name: .transition-timing-{timing}
  */

  transitionTimingFunction: {
    default: 'ease-in-out',
  },


  /*
  |-----------------------------------------------------------------------------
  | Transition Delay
  |-----------------------------------------------------------------------------
  | All four transition properties accept a `default` key, which is applied
  | using `.transition`.
  |
  | Class name: .transition-delay-{delay}
  */

  transitionDelay: {},


  /*
  |-----------------------------------------------------------------------------
  | Modules                  https://tailwindcss.com/docs/configuration#modules
  |-----------------------------------------------------------------------------
  |
  | Here is where you control which modules are generated and what variants are
  | generated for each of those modules.
  |
  | Currently supported variants:
  |   - responsive
  |   - hover
  |   - focus
  |   - focus-within
  |   - active
  |   - group-hover
  |
  | To disable a module completely, use `false` instead of an array.
  |
  */

  modules: {
    appearance: false,
    backgroundAttachment: false,
    backgroundColors: ['responsive', 'hover'],
    backgroundPosition: [],
    backgroundRepeat: [],
    backgroundSize: [],
    borderCollapse: false,
    borderColors: [],
    borderRadius: [],
    borderStyle: [],
    borderWidths: ['responsive'],
    cursor: false,
    display: ['responsive'],
    flexbox: ['responsive'],
    float: ['responsive'],
    fonts: [],
    fontWeights: [],
    height: [],
    leading: [],
    lists: [],
    margin: ['responsive'],
    maxHeight: [],
    maxWidth: ['responsive'],
    minHeight: false,
    minWidth: [],
    negativeMargin: ['responsive'],
    objectFit: false,
    objectPosition: false,
    opacity: ['responsive'],
    outline: false,
    overflow: [],
    padding: ['responsive'],
    pointerEvents: [],
    position: ['responsive'],
    resize: false,
    shadows: [],
    svgFill: [],
    svgStroke: [],
    tableLayout: false,
    textAlign: ['responsive'],
    textColors: ['responsive', 'hover', 'group-hover'],
    textSizes: ['responsive'],
    textStyle: ['responsive'],
    tracking: [],
    userSelect: false,
    verticalAlign: false,
    visibility: [],
    whitespace: false,
    width: ['responsive', 'group-hover'],
    zIndex: [],
  },


  /*
  |-----------------------------------------------------------------------------
  | Plugins                                https://tailwindcss.com/docs/plugins
  |-----------------------------------------------------------------------------
  |
  | Here is where you can register any plugins you'd like to use in your
  | project. Tailwind's built-in `container` plugin is enabled by default to
  | give you a Bootstrap-style responsive container component out of the box.
  |
  | Be sure to view the complete plugin documentation to learn more about how
  | the plugin system works.
  |
  */

  plugins: [
    require('./tailwind-plugins/aspect-ratio')({
      ratios: {
        'square': [1, 1],
        '16/9': [16, 9],
      },
      variants: ['responsive'],
    }),
    require('./tailwind-plugins/svg-wrapper'),
    require('./tailwind-plugins/transitions')({
      prefix: 'transition',
      variants: [],
    }),
  ],


  /*
  |-----------------------------------------------------------------------------
  | Advanced Options         https://tailwindcss.com/docs/configuration#options
  |-----------------------------------------------------------------------------
  |
  | Here is where you can tweak advanced configuration options. We recommend
  | leaving these options alone unless you absolutely need to change them.
  |
  */

  options: {
    prefix: '',
    important: false,
    separator: ':',
  },

}
