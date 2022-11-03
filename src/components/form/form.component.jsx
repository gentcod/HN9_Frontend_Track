import {FormContainer, FormHeader, FormSummary, InputNameContainer, Input, InputData, InputMessage, FormLabel, InputRadio, ButtonSubmit} from './form.styles';

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
         <InputNameContainer>
            <Input>
               <FormLabel placeholder={formData.firstName.label}/>
               <InputData placeholder={formData.firstName.placeholder} />
            </Input>
            <Input>
               <FormLabel placeholder={formData.lastName.label}/>
               <InputData placeholder={formData.lastName.placeholder} />
            </Input>
         </InputNameContainer>
         <Input>
            <FormLabel placeholder={formData.email.label}/>
            <InputData placeholder={formData.email.placeholder} type='email'/>
         </Input>
         <Input>
            <FormLabel placeholder={formData.message.label}/>
            <InputMessage placeholder={formData.message.placeholder}/>
         </Input>
         <Input>
            <InputRadio type='radio'/>
         </Input>
         <ButtonSubmit>{formData.buttonText}</ButtonSubmit>
      </FormContainer>
   )
};

export default Form;