Hey there,

{{.Message}}

-{{.OwnerName}}

<form class="login-box" action="/request-login-link/" method="post">
    <input name="title" type="hidden" value="{{.PageTitle}}"/>
    <div class="input"><input name="email" type="email" placeholder="email@example.com"/>
    </div>

    <button type="submit">Send My Login Link</button>
</form>
 
