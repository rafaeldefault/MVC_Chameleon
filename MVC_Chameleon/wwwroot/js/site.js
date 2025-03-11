// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).jquery(function () {
    $(".btn-enviar").on("click", function () {
        let $btn = $(this);
        let $icon = $btn.find(".icon-enviar");
        let $text = $btn.find(".text");

        // Faz o ícone desaparecer para a direita e o texto voltar ao centro
        $icon.css({ right: "-30px", opacity: 0 });
        $text.css({ transform: "translateX(0px)" });

        // Delay para reiniciar animação
        setTimeout(() => {
            $icon.css({ right: "10px", opacity: 1 });
            $text.css({ transform: "translateX(-10px)" });
        }, 500);
    });
});
