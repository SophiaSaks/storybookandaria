import Button from '../components/Button'

export default {
    title: "Button",
    component: Button
}

export const TestButton = () => <Button onPress={() => alert('Hallå där')}>Hej</Button>

export const TestButton2 = () => <Button onPress={() => alert('Heeeej')}>Nämen tjaa</Button>