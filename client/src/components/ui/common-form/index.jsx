import { Button } from "../button"
import FormControls from "./form-controls"
function CommonForm({handleSubmit, buttonText, formControls = [], formData, setFormData, isButtonDisabled = false}) {
    return(
        <form onSubmit={handleSubmit}>
            {/* render form controls here */}
            <FormControls formControls={formControls} formData={formData} setFormData={setFormData}/>
            <Button type="submit" disabled={isButtonDisabled} className="w-full bg-black text-white mt-4">{buttonText || 'Submit'}</Button>
        </form>
    )
}

export default CommonForm