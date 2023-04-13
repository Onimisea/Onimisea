import { useForm, SubmitHandler } from "react-hook-form";
import SubmitButton from "./SubmitButton";

type FormValues = {
  email: string;
};

type Props = {}

const EmailSubscriptionForm = (props: Props) => {
const { register, handleSubmit } = useForm<FormValues>();

const onSubmit: SubmitHandler<FormValues> = data => {
alert(JSON.stringify(data));
};


return (
<form onSubmit={handleSubmit(onSubmit)} className="w-full bg-gray-300">
      <input type="email" {...register("email")} />

      <SubmitButton buttonText="Subscribe" buttonType="primary" />
    </form>
)
}

export default EmailSubscriptionForm
