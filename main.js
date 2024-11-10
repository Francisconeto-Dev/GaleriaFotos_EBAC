$(document).ready(function(){
    $("header button").click(function(){
       $('form').slideDown();
    })

    $('#cancelbtn').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const enderecoimagemnova = $('#endereco-imagem-nova').val();
        const novoItem = 
       
        $(`
            <li style="display: none" >
            <img src="${enderecoimagemnova}"/>
            <div class="overlay-imagem-link" >
            
                <a href="${enderecoimagemnova}" title="Ver imagem em tamanho real" target="_blank">
                    Ver imagem em tamanho real
                </a>
            
            
            </div>  
            </li>  
        `);

        $(novoItem).appendTo('ul').fadeIn(2000);
        
        $('#endereco-imagem-nova').val('');
    })

})
