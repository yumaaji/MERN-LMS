import { GraduationCap } from "lucide-react";
import { useContext, useState } from "react";
import { Tabs, TabsTrigger, TabsList, TabsContent } from "@components/ui/tabs";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@components/ui/card";
import { Link } from "react-router-dom";
import CommonForm from "../../components/ui/common-form";
import { signUpFormControls, signInFormControls } from "@/config";
import { AuthContext } from "@/context/auth-context";

function AuthPage() {
    const [activeTab, setActiveTab] = useState("signin");
    const {
        signInFormData,
        setSignInFormData,
        signUpFormData,
        setSignUpFormData,
    } = useContext(AuthContext)
    
    function handelTabChange(value) {
        setActiveTab(value);
    }

    function checkIfSignInFormIsValid(){
        return signInFormData && signInFormData.userEmail !== "" && signInFormData.password !== ""
    }

    function checkIfSignUpFormIsValid(){
        return signUpFormData  && signInFormData.userName !== "" && signInFormData.userEmail !== "" && signInFormData.password !== ""
    }

    console.log(signInFormData)
    console.log(signUpFormData)

    return (
        <div className="flex flex-col min-h-screen">
        <header className="px-4 lg:px-6 h-14 flex items-center border-b">
            <Link to={"/"} className="flex items-center justify-center">
            <GraduationCap className="h-8 w-8 mr-4" />
            <span className="font-extrabold text-xl">LMS LEARNING</span>
            </Link>
        </header>
        <div className="flex items-center justify-center min-h-screen bg-background">
            <Tabs
            value={activeTab}
            defaultValue="signin"
            onValueChange={handelTabChange}
            className="w-full max-w-md"
            >
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="signin">Sign In</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            <TabsContent value="signin">
                <Card className="p-6 space-y-4">
                <CardHeader>
                    <CardTitle>Sign in to your account</CardTitle>
                    <CardDescription>
                    Enter you email and password to access your account
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <CommonForm
                    formControls={signInFormControls}
                    buttonText="Sign In"
                    formData={signInFormData}
                    setFormData={setSignInFormData}
                    isButtonDisabled = {!checkIfSignInFormIsValid()}
                    />
                </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="signup">
                <Card className="p-6 space-y-4">
                <CardHeader>
                    <CardTitle>Sign up to your account</CardTitle>
                    <CardDescription>
                    Enter your details to get started
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <CommonForm
                    formControls={signUpFormControls}
                    buttonText="Sign Up"
                    formData={signUpFormData}
                    setFormData={setSignUpFormData}
                    isButtonDisabled = {!checkIfSignUpFormIsValid()}
                    />
                </CardContent>
                </Card>
            </TabsContent>
            </Tabs>
        </div>
        </div>
    );
}

export default AuthPage;
