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
<form onSubmit={handleSubmit(onSubmit)} className="w-full bg-gray-300 flex items-start justify-center">
      <input type="email" {...register("email", { required: "Email Address is required"})} aria-invalid={errors.email ? "true" : "false"} />
{errors.email && <p role="alert">{errors.email?.message}</p>}

      <SubmitButton buttonText="Subscribe" buttonType="primary" />
    </form>
)
}

export default EmailSubscriptionForm
