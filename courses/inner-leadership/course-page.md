# {{.ConfigObj.Name}}
{{ $url := .Url }}
{{ range $session := .ConfigObj.Sessions }}
## [{{$session.Name}}]({{$url}}/{{$session.Url}})  
{{ end }}
