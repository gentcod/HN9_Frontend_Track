import styled from "styled-components";

export const FormContainer = styled.form`
   padding: 6rem 9.5rem;
   margin-bottom: 2rem;
   border-bottom: 1px solid #e6e5e5;
`

export const FormHeader = styled.h2`
   font-size: 2.2rem;
   font-weight: 900;
   text-align: left;
   margin-bottom: 1rem;
`

export const FormSummary = styled.p`
   font-size: 1.3rem;
   text-align: left;
   color: #475467;
`

export const InputNameContainer = styled.div`
   display: flex;
   flex-direction: row;
   width: 100%;
   gap: 1.5rem;
   margin-top: .5rem;
`

export const Input = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   height: fit-content;
   margin: 1rem 0;
`
   
export const InputData = styled.input`
   width: 100%;
   height: 3rem;
   padding: .5rem;
   border: 1px solid #e6e5e5;
   outline: none;
`

export const InputMessage = styled.textarea`
   height: 13rem;
   padding: 1rem;
   border: 1px solid #e6e5e5;
   outline: none;
`

export const InputRadio = styled.input`
   left: 0;
`

export const ButtonSubmit = styled.button`
   padding: 1rem;
   width: 100%;
   border: none;
   border-radius: .5rem;
   background-color: #1570EF;
   color: #fff;
`

export const FormLabel = styled.label`
   font-size: 1rem;
   margin-bottom: 1rem;
`