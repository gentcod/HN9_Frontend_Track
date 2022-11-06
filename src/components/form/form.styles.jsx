import styled from "styled-components";

export const FormContainer = styled.form`
   padding: 10rem 39.5rem;
   border-bottom: 1px solid #e6e5e5;

   @media only screen and (max-width: 56.25em) {
      padding: 10rem 3rem;
   }
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
   margin-bottom: 1rem;
`

export const InputNamesContainer = styled.div`
   display: flex;
   flex-direction: row;
   width: 100%;
   gap: 1.5rem;
   margin-top: .5rem;
`

export const InputContainer = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   height: fit-content;
   margin: 1rem 0;
`

export const FormLabel = styled.label`
   text-align: left;
   font-size: 1rem;
   font-weight: 700;
   margin-bottom: 1rem;
`
   
export const InputData = styled.input`
   width: 100%;
   height: 3rem;
   padding: .5rem;
   border: 1px solid #e6e5e5;
   outline: none;

   &::placeholder {
      color: #c2c0c0;
   }
`

export const InputMessage = styled.textarea`
   height: 13rem;
   padding: 1rem;
   border: 1px solid #e6e5e5;
   outline: none;

   &::placeholder {
      color: #c2c0c0;
   }
`

export const InputRadioContainer = styled(InputNamesContainer)`
   align-items: center;
   justify-content: flex-start;
   margin: 1rem auto;
`

export const InputRadio = styled.input`
   left: 0;
`
export const FormRadioLabel = styled(FormLabel)`
   margin-bottom: 0;
   font-weight: 500;
`

export const ButtonSubmit = styled.button`
   padding: 1rem;
   width: 100%;
   border: none;
   border-radius: .5rem;
   background-color: #1570EF;
   box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
   color: #fff;
   cursor: pointer;

   &:hover {
      background-color: #0a418f;
   }
`