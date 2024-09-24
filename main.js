$(document).ready(function () {
    // Adicionar tarefa
    $('form').on('submit', function (event) {
        event.preventDefault();
        let tarefa = $('#endereço-nova-tarefa').val();
        if (tarefa) {
            $('#lista-tarefas').append('<li>' + tarefa + ' <button class="riscar">Concluir</button> <button class="remover">Remover</button></li>');
            $('#endereço-nova-tarefa').val('');
        }
    });

    // Riscar tarefa ao clicar no item da lista
    $('#lista-tarefas').on('click', 'li', function () {
        $(this).toggleClass('concluida');
    });

    // Remover tarefa
    $('#lista-tarefas').on('click', '.remover', function (event) {
        event.stopPropagation(); // Evita que o clique no botão "Remover" risque a tarefa
        $(this).parent().fadeOut(300, function () {
            $(this).remove();
        });
    });
});
