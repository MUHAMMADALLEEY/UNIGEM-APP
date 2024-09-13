import moment from "moment";
import { Dimensions } from "react-native";
import { launchImageLibrary } from "react-native-image-picker";
import Toast from "react-native-toast-message";

export const screenWidth= Dimensions.get('window').width;
export const screenHeight= Dimensions.get('window').height;
export const showError = (text1='',text2='') => {
    // Alert.alert('leh')
    Toast.show({
      type:'error',
      text1: text1,
      text2: text2,
    });
  }
  export const showSucess = (text1='',text2='') => {
    // Alert.alert('leh')
    Toast.show({
      type: 'success',
      text1: text1,
      text2: text2,
    });
  }

  export const matchPasswords = (text1='',text2='') => {
    if(text1!==text2){
      showError('Validation','Passwords do not match!');
      return false;
    }
    return true;
  }

  type FieldType = 'name' | 'email' | 'password' | string;

  export const validateField=(type:FieldType,text='')=>{
    if (type === 'name') {
        const nameRegex = /[a-zA-Z]/;
        if(text.length<3){
            showError('Validation','Name is too Short or empty!');
            return false;
        }
        if(!nameRegex.test(text)){
            showError('Validation','Not a valid Name!');
            return false;
        }
      }
    else  if (type === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(text)){
            showError('Validation','Please input a valid email address!');
        return false;
        }
      }
    else  if (type === 'password') {
        const passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;
        if(!passwordRegex.test(text)){
          showError('Invalid password','Password must be at least 6 characters and a special character')
        return false;
        }
      }
      else{
       if(text.length<1){
        showError('Required',type+" "+"is required field!");
        return false;
       }
      }
   return true;
  }

  export const formateDate=(date:string)=>{
    const formattedDate = moment(date).format('MMMM Do YYYY, h:mm:ss a');
    return formattedDate;
  }

  export const chooseFile = async (type='',limit=1) => {
    return new Promise((resolve, reject) => {
        try {
          launchImageLibrary(
            {
              mediaType: 'photo',
              quality: 1,
              presentationStyle: 'formSheet',
              selectionLimit: limit,
            },
            (response) => {
              if (response.didCancel) {
                console.log('User cancelled camera picker');
              } else if (response.errorCode === 'camera_unavailable') {
                console.log('Camera not available on device');
              } else if (response.errorCode === 'permission') {
                console.log('Permission not satisfied');
              } else if (response.errorCode === 'others') {
                console.log(response.errorMessage);
              } else {
                resolve(response?.assets);
              }
            }
          );
        } catch (error) {
          reject(error);
        }
      });
 };

 
 export const chooseeFile = async (type='',limit=100) => {
  return new Promise((resolve, reject) => {
      try {
        launchImageLibrary(
          {
            mediaType: 'photo',
            quality: 1,
            presentationStyle: 'formSheet',
            selectionLimit: limit,
          },
          (response) => {
            if (response.didCancel) {
              console.log('User cancelled camera picker');
            } else if (response.errorCode === 'camera_unavailable') {
              console.log('Camera not available on device');
            } else if (response.errorCode === 'permission') {
              console.log('Permission not satisfied');
            } else if (response.errorCode === 'others') {
              console.log(response.errorMessage);
            } else {
              resolve(response?.assets);
            }
          }
        );
      } catch (error) {
        reject(error);
      }
    });
};
