@component('mail::message')
# Change Password

@component('mail::button', ['url' => 'http://localhost:4200/update-password?token='.$token])
Reset Password
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent