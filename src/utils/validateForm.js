
export const validateForm = (formData, isSignIn) => {
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(formData.email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(formData.password);
    const isFullNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(formData.fullName);

    console.log(formData)
    if(!isFullNameValid && !isSignIn){
        return "Full Name is not valid";
    }
    if(!isEmailValid){
        return "Email Address is not valid";
    }
    if(!isPasswordValid){
        return "Password is not valid"
    }

    return null;

}