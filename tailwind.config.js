const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: [
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            backgroundImage: theme => ({
                'login': "url('/images/login-cover.jpg')",
                'intro-about': "url('/images/sections/intro-about.jpg'), linear-gradient(to bottom, rgba(0,0,0,.9), rgba(255,255,255,.6))",
            }),
            scale: {
                '65': '.65',
            },
            textColor: {
                'navyblue': '#0B214A',
            },
            height: {
                '112': '26rem',
                '126': '28rem',
                '144': '32rem'
            },
            boxShadow: {
                blue: '0 4px 14px 0 rgba(19, 51, 81, 0.39)',
                theme: '0 1px 3px 0 rgba(157, 23, 77, 0.4), 0 1px 2px 0 rgba(157, 23, 77, 0.06)',
            },
        },
    },

    variants: {
        extend: {
            opacity: ['disabled'],            
        },
    },

    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
