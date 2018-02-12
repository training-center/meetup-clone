import React from 'react'
import styled from 'styled-components'

const EventForm = ({ event }) => (
    <ContainerForm>
        <h1>Novo Evento</h1>        
        <ContainerInput>
            <Label>Categoria</Label>
            <select name="categoriaInput">
                <option selected value="desenvolvimento">Desenvolvimento</option>
                <option value="devops">DevOps</option>
            </select>
        </ContainerInput>                
        <ContainerInput>
            <Label>Imagem de capa</Label>
            <input name="imagemCapaInput" type="file" />
        </ContainerInput>
        <ContainerInput>
            <Label>Título</Label>
            <input name="tituloInput" type="text" />
        </ContainerInput>
        <ContainerInput>
            <Label>Data de realização</Label>
            <input name="dadtaInput" type="date" />
        </ContainerInput>        
        <Label>Descrição</Label>
        <textArea name="descricaoTextArea" ></textArea>        
        <input name="submitButton" type="button" value="Cadastrar Evento" />         
    </ContainerForm>
)

const ContainerForm = styled.form`
    display: flex;
    flex-direction: column;
`

const ContainerInput = styled.div`
    display: flex;
    align-items: baseline;
    justfy-content: flex-start;
`

const Label = styled.label`
    padding: 0 10px 0 0;    
`

export default EventForm