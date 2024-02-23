import Button from '../components/Button'

export default {
    title: "Button",
    component: Button,
    args: {
        children: 'Click me!'
    }
}

export const Primary = {
    args: {
        primary: true,
        children: 'Primär!',
    }
}

export const Secondary = {
    args: {
        primary: false,
        children: 'Sekundär!',
    }
}

export const Test = {
    args: {
        primary: false,
    }
}
