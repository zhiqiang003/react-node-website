// main
get "/" => "main#index"
get "/test" => "main#index"

// error
get "/error" => "error#base"