$(document).ready(function(){
    $('form').on('submit',(e)=>{
        e.preventDefault();
        const inputTarefa = $('#nome-tarefa').val();
        const novaTarefa = $(`<li>${inputTarefa}</li>`);
        $(novaTarefa).appendTo('ol');
        $(novaTarefa).fadeIn(200);
        $("#limpar").slideDown(300)
        $("#nome-tarefa").val('');
    });
    
    $('ol').on('click', 'li', function(){
        $(this).toggleClass('lista-completa');
    });
    $("#limpar").on('click', function(){
        $("li").slideUp(300, function(){
            $(this).remove(400);
            $("limpar").fadeOut(300)
        })

    })
})