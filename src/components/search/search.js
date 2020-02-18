import React, { useState } from "react";

import {Form, Label, Input, Button} from "./styled"


export default function Search() {
    const [name, setName] = useState ('')

    function handleChange (e) {
        setName(e.target.value)
    }

    function handleSubmit (e) {
        e.preventDefault()
        window.location = (`/devfinder#/results/${name}`)
    }

    return (
        <Form onSubmit={(e) => handleSubmit(e)}>
            <Label>Busque por nome de usuário</Label>
            <Input placeholder="Digite aqui" onChange={(e) => handleChange(e)}/>
            <Button type="submit">BUSCAR DEVS</Button>
        </Form>
    );
}