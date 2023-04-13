import { useForm, SubmitHandler } from "react-hook-form";
import SubmitButton from "./SubmitButton";

type FormValues = {
  email: string;
};

type Props = {}

const EmailSubscriptionForm = (props: Props) => {
const { register, handleSubmit, formState: { errors }, } = useForm<FormValues>();

const onSubmit: SubmitHandler<FormValues> = data => {
alert(JSON.stringify(data));
};


return (
<form onSubmit={handleSubmit(onSubmit)} className="w-full bg-gray-300 flex flex-col">

<section className="w-full bg-orange-400 flex items-center justify-start">
      <input type="email" {...register("email", { required: "Email Address is required"})} aria-invalid={errors.email ? "true" : "false"} 
placeholder="email address" className="bg-white border border-tertiary-500 rounded-full px-4" />
<SubmitButton buttonText="Subscribe" buttonType="primary" />
</section>

{errors.email && <p className="text-red-600 w-full" role="alert">{errors.email?.message}</p>}
    
    </form>
)
}

export default EmailSubscriptionForm
