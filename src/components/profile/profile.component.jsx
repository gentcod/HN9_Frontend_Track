import { ProfileContainer, ImageContainer, Image, ProfileName} from './profile.styles';

const data = {
   name: "Oyefule Oluwatayo",
   image: "https://i.ibb.co/Fzgg3tF/FB-IMG-1574542159733.jpg"
}

const Profile = () => {
   return (
      <ProfileContainer>
         <ImageContainer>
            <Image src={data.image}/>
         </ImageContainer>
         <ProfileName>{data.name}</ProfileName>
      </ProfileContainer>
   )
}

export default Profile;