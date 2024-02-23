import MyButton from '../components/MyButton'

export default {
    title: "Button",
    component: MyButton,
    args: {
        children: 'Click me!'
    }
}

export const Primary = {
    args: {
        primary: true,
        children: 'Primär!',
        isDisabled: false
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
