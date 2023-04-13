import { useForm, SubmitHandler } from "react-hook-form";

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
<form onSubmit={handleSubmit(onSubmit)}>
      <input type="email" {...register("email")} />

      <input type="submit" />
    </form>
)
}

export default EmailSubscriptionForm
