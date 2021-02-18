interface FooProps {
    name: string;
}

export class Foo {
    constructor(props: FooProps) {
        console.log(`constructed a foo with name: ${props.name}`)
    }
}

