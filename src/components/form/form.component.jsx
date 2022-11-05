import {FormContainer, FormHeader, FormSummary, InputNamesContainer, InputContainer, InputData, InputMessage, FormLabel, FormRadioLabel, InputRadioContainer, InputRadio, ButtonSubmit} from './form.styles';

//Form data to avoid hardcoding and for easy maintenance

const formData = {
   header: "Contact Me",
   summary: "Hi there, contact me to ask about anything you have in mind.",
   firstName: {
      placeholder: 'Enter your first name',
      label: 'First name',
   },
   lastName: {
      placeholder: 'Enter your last name',
      label: 'Last name',
   },
   email: {
      placeholder: 'yourname@email.com',
      label: 'Email',
   },
   message: {
      placeholder: "Send me a message and I'll reply as soon as possible...",
      label: 'Message',
   },
   radio: {
      label: 'You agree to providing your data to Oyefule who may contact you',
   },
   buttonText: 'Send message',
}

const Form = () => {
   return (
      <FormContainer>
         <FormHeader>{formData.header}</FormHeader>
         <FormSummary>{formData.summary}</FormSummary>
         <InputNamesContainer>
            <InputContainer>
               <FormLabel htmlFor='firstName'>{formData.firstName.label}</FormLabel>
               <InputData placeholder={formData.firstName.placeholder} id='firstName' required/>
            </InputContainer>
            <InputContainer>
               <FormLabel htmlFor='lastName'>{formData.lastName.label}</FormLabel>
               <InputData placeholder={formData.lastName.placeholder} id='lastName' required/>
            </InputContainer>
         </InputNamesContainer>
         <InputContainer>
            <FormLabel htmlFor='email'>{formData.email.label}</FormLabel>
            <InputData placeholder={formData.email.placeholder} id='email' type='email' required/>
         </InputContainer>
         <InputContainer>
            <FormLabel htmlFor='message'>{formData.message.label}</FormLabel>
            <InputMessage placeholder={formData.message.placeholder} id='message' required/>
         </InputContainer>
         <InputRadioContainer>
            <InputRadio type='radio' id='radio' required/>
            <FormRadioLabel htmlFor='radio'>{formData.radio.label}</FormRadioLabel>
         </InputRadioContainer>
         <ButtonSubmit>{formData.buttonText}</ButtonSubmit>
      </FormContainer>
   )
};

export default Form;