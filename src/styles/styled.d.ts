import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string

        colors: {
            background: string
            text: string
            link: string
            hover: {
                link: string
            }
        }

        body: string
        textColor: string
        linkColor: string
        linkColorHover: string
    }
}
