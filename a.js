function Login() {
    const { register, handleSubmit, formState: { isSubmitting, isSubmitted, errors } } = useForm();
    return (
        <form
            noValidate
            onSubmit={handleSubmit(async (data) => {
                await new Promise((r) => setTimeout(r, 1_000));
                alert(JSON.stringify(data));
            })}
        >
            <label htmlFor="email">이메일</label>
            <input id="email" type="email" placeholder="lincook@email.com"
                {...register('email', {
                    required: '이메일은 필수 입력입니다.',
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: '이메일 형식에 맞지 않습니다.'
                    }
                })}
                aria-invalid={isSubmitted ? (errors.email ? "true" : "false") : undefined}
            />
            {errors.email && <small role="alert">{errors.email.message}</small>}

            <label htmlFor="password">비밀번호</label>
            <input id="password" type="password" placeholder="********"
                {...register('password', {
                    required: '비밀번호는 필수 입력입니다.',
                    pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/,
                        message: '비밀번호 형식에 맞지 않습니다.'
                    }
                })}
                aria-invalid={isSubmitted ? (errors.password ? "true" : "false") : undefined}

            />
            {errors.password && <small role="alert">{errors.password.message}</small>}
            <button className='btn' type="submit" disabled={isSubmitting}>Sign in</button>
        </form >
    )
}
export default Login;
