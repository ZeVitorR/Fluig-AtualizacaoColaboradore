$(document).ready(function(){
    var atividadeAtual = getWKNumState();
    if(atividadeAtual == 0 || atividadeAtual == 4){
        const dataAtual = new Date();
		const dia = atualizaData(dataAtual.getDate());
		const mes = atualizaData(dataAtual.getMonth() + 1);
		const ano = dataAtual.getFullYear();
        document.getElementById('dataCriacao').value = ''+ano+mes+dia
        $("#AcessosServiços").hide();
        $("#AcessoEspPro").hide();
        $("#AcessoEspFluig").hide();
        $("#AtividesRealizado").hide();
        $("#AcessoEspObs").hide();
        $("#documeto").hide();
    }else{
        $("#AtividesRealizado").show();
        $("#documeto").show();
        adicionaAtividade()    
    }
})
function seleciona(val,acao) {
    const protheus = document.getElementById('Protheus') 
    const fluig = document.getElementById('fluig') 
    $("#AcessoEspPro").hide();
    $("#AcessoEspFluig").hide();
    if(val == 'Novo Colaborador'){
        $("#AcessosServiços").show();
        // $("#AtividesRealizado").show();
        $("#documeto").show();
        $("#AcessoEspObs").show(); 
        
        $("#alteracaoCargo1").hide();  
        $("#alteracaoCargo2").hide();

        $("#desliga.checkedmento1").hide();
        $("#desliga.checkedmento2").hide();
        $("#desliga.checkedmento3").hide();
        $("#desliga.checkedmento4").hide();
        $("#desliga.checkedmento5").hide();
        $("#desliga.checkedmento6").hide();
        $("#desliga.checkedmento7").hide();
        $("#desliga.checkedmento8").hide();

        $("#novoColaborador1").show();
        $("#novoColaborador2").show();
        $("#novoColaborador3").show();
        $("#novoColaborador4").show();
        $("#novoColaborador5").show();
        $("#novoColaborador6").show();
        $("#novoColaborador7").show();
        $("#novoColaborador8").show();
        $("#novoColaborador9").show();
        if(protheus.checked == true){
            $("#AcessoEspPro").show();  
        }
        if(fluig.checked == true){
            $("#AcessoEspFluig").show();  
        }
    }else if(val == 'Atualização de cargo' || val == 'Modificação de acesso/menu'){
        $("#AcessosServiços").show();
        // $("#AtividesRealizado").show();
        $("#documeto").show();
        $("#AcessoEspObs").show(); 

        $("#novoColaborador1").hide();
        $("#novoColaborador2").hide();
        $("#novoColaborador3").hide();
        $("#novoColaborador4").hide();
        $("#novoColaborador5").hide();
        $("#novoColaborador6").hide();
        $("#novoColaborador7").hide();
        $("#novoColaborador8").hide();
        $("#novoColaborador9").hide();

        $("#desliga.checkedmento1").hide();
        $("#desliga.checkedmento2").hide();
        $("#desliga.checkedmento3").hide();
        $("#desliga.checkedmento4").hide();
        $("#desliga.checkedmento5").hide();
        $("#desliga.checkedmento6").hide();
        $("#desliga.checkedmento7").hide();
        $("#desliga.checkedmento8").hide();

        $("#alteracaoCargo1").show();
        $("#alteracaoCargo2").show();

        if(protheus.checked == true){
            $("#AcessoEspPro").show();  
        }
        if(fluig.checked == true){
            $("#AcessoEspFluig").show();  
        }
    }else if(val == 'desliga.checkedmento'){
        $("#AcessosServiços").show();
        // $("#AtividesRealizado").show();
        $("#documeto").show();
        $("#AcessoEspObs").show(); 

        $("#novoColaborador1").hide();
        $("#novoColaborador2").hide();
        $("#novoColaborador3").hide();
        $("#novoColaborador4").hide();
        $("#novoColaborador5").hide();
        $("#novoColaborador6").hide();
        $("#novoColaborador7").hide();
        $("#novoColaborador8").hide();
        $("#novoColaborador9").hide();

        $("#alteracaoCargo1").hide();  
        $("#alteracaoCargo2").hide();

        $("#desliga.checkedmento1").show();
        $("#desliga.checkedmento2").show();
        $("#desliga.checkedmento3").show();
        $("#desliga.checkedmento4").show();
        $("#desliga.checkedmento5").show();
        $("#desliga.checkedmento6").show();
        $("#desliga.checkedmento7").show();
        $("#desliga.checkedmento8").show();

        if(protheus.checked == true){
            $("#AcessoEspPro").show();  
        }
        if(fluig.checked == true){
            $("#AcessoEspFluig").show();  
        }
    }else if(val == 'Outro' || val == ''){
        $("#AcessosServiços").hide();
        $("#AcessoEspPro").hide();
        $("#AcessoEspFluig").hide();
        $("#AtividesRealizado").hide();
        $("#documeto").show();
        $("#AcessoEspObs").show(); 
        if(val == ''){
            $("#documeto").hide();
            $("#AcessoEspObs").hide(); 
        }
    }
    if((val != '' || val != 'Novo Colaborador') && acao == 'atualiza' ){
        consultaUser('nomeCompleto','emailColaborador')
    }
    document.getElementById("doctipoAcao").innerHTML = val
}

function verificaSeleção(value,id){
    const veri = document.getElementById('Desativacao').checked
    if(value.checked == true){
        document.getElementById(id).innerHTML = "Liberado"
    }else{
        var nome = document.getElementById('nomeCompleto').value
        var email = document.getElementById('emailColaborador').value
        var verifi = verificaServico(nome,email,value.id)
        if( verifi == true){
            if(veri == true){
                document.getElementById(id).innerHTML = "Revogado"
                if(value.id == 'Protheus'){
                    if(verificaServico(nome,email,'compras') == true ){
                        document.getElementById('compras').checked = false
                        document.getElementById('docCompralib').innerHTML = "Revogado"
                    }
                    if(verificaServico(nome,email,'contaPagar') == true ){
                        document.getElementById('contaPagar').checked = false                        
                        document.getElementById('docContPaglib').innerHTML = "Revogado"
                    }
                    if(verificaServico(nome,email,'Contabilidade') == true ){
                        document.getElementById('Contabilidade').checked = false
                        document.getElementById('docContablib').innerHTML = "Revogado"
                    }
                    if(verificaServico(nome,email,'Faturamento') == true ){
                        document.getElementById('Faturamento').checked = false
                        document.getElementById('docfatlib').innerHTML = "Revogado"
                    }
                    if(verificaServico(nome,email,'AtivoFixo') == true ){
                        document.getElementById('AtivoFixo').checked = false
                        document.getElementById('docAtflib').innerHTML = "Revogado"  
                    }
                    if(verificaServico(nome,email,'EstoqueCusto') == true ){
                        document.getElementById('EstoqueCusto').checked = false
                        document.getElementById('docestlib').innerHTML = "Revogado"
                    }
                    if(verificaServico(nome,email,'contaReceber') == true ){
                        document.getElementById('contaReceber').checked = false
                        document.getElementById('docContReclib').innerHTML = "Revogado"
                    }
                    if(verificaServico(nome,email,'tesouraria') == true ){
                        document.getElementById('tesouraria').checked = false
                        document.getElementById('docTeslib').innerHTML = "Revogado"
                    }
                    if(verificaServico(nome,email,'rh') == true ){
                        document.getElementById('rh').checked = false
                        document.getElementById('docRhlib').innerHTML = "Revogado"
                    }
                    if(verificaServico(nome,email,'TAF') == true ){
                        document.getElementById('TAF').checked = false
                        document.getElementById('doctaflib').innerHTML = "Revogado"
                    }
                    if(verificaServico(nome,email,'LivrosFiscais') == true ){
                        document.getElementById('LivrosFiscais').checked = false
                        document.getElementById('doclivrolib').innerHTML = "Revogado"
                    }
                    if(verificaServico(nome,email,'Configurador') == true ){
                        document.getElementById('Configurador').checked = false
                        document.getElementById('doccfglib').innerHTML = "Revogado"
                    }
                }else if(value.id == 'fluig'){
                    if(verificaServico(nome,email,'gedParc') == true ){
                        document.getElementById('gedParc').checked = false
                        document.getElementById('docgedlib').innerHTML = "Revogado"
                    }
                    if(verificaServico(nome,email,'gedTot') == true ){
                        document.getElementById('gedTot').checked = false
                        document.getElementById('docgedlib').innerHTML = "Revogado"
                    }
                    if(verificaServico(nome,email,'proParc') == true ){
                        document.getElementById('proParc').checked = false
                        document.getElementById('docprocessolib').innerHTML = "Revogado"
                    }
                    if(verificaServico(nome,email,'proTot') == true ){
                        document.getElementById('proTot').checked = false
                        document.getElementById('docprocessolib').innerHTML = "Revogado"
                    }
                    if(verificaServico(nome,email,'cfgParc') == true ){
                        document.getElementById('cfgParc').checked = false
                        document.getElementById('docConfiglib').innerHTML = "Revogado"
                    }
                    if(verificaServico(nome,email,'cfgTot') == true ){
                        document.getElementById('cfgTot').checked = false
                        document.getElementById('docConfiglib').innerHTML = "Revogado"
                    }
                }
            }else{
                document.getElementById(id).innerHTML = "Não liberado"
            }
        }
    }
}

function verificaSeleção2(value,id,tipo){
    const veri = document.getElementById('Desativacao').checked
    if(value.checked == true){
        var val = ''+value.id
        var type = val.split(tipo)
        if(tipo == 'Parc'){
            var idM = type[0]+'Tot'
            document.getElementById(idM).checked = false
            document.getElementById(id).innerHTML = "Liberado parcialmente"
        }else{
            var idM = type[0]+'Parc'
            document.getElementById(idM).checked = false
            document.getElementById(id).innerHTML = "Liberado totalmente"
        }
    }else{
        var nome = document.getElementById('nomeCompleto').value
        var email = document.getElementById('emailColaborador').value
        var verifi = verificaServico(nome,email,value.id)
        if( verifi == true){
            if(veri == true){
                document.getElementById(id).innerHTML = "Revogado"
            }else{
                document.getElementById(id).innerHTML = "Não liberado"
            }
        }
    }
}

function defineValor(value,id){
    document.getElementById(id).innerHTML = value;
}

function definetipo(){
    const inclusao = document.getElementById('Inclusao').checked;
    const Alteracao = document.getElementById('Alteracao').checked;
    const Desativacao = document.getElementById('Desativacao').checked;
    if(inclusao == true){
        document.getElementById('docSelInc').innerHTML = 'X';
        document.getElementById('docSelAlt').innerHTML = '';
        document.getElementById('docSelDes').innerHTML = '';
    }else if(Alteracao == true){
        document.getElementById('docSelInc').innerHTML = '';
        document.getElementById('docSelAlt').innerHTML = 'X';
        document.getElementById('docSelDes').innerHTML = '';
    }else if(Desativacao == true){
        document.getElementById('docSelInc').innerHTML = '';
        document.getElementById('docSelAlt').innerHTML = '';
        document.getElementById('docSelDes').innerHTML = 'X';
    }
}

function adicionaAtividade() {
    var userAtual = getWKUser();
    console.log(userAtual)
    var constraints = new Array();
    constraints.push(DatasetFactory.createConstraint("colleaguePK.colleagueId", userAtual, userAtual, ConstraintType.MUST));        
    //Define os campos para ordenação
    var sortingFields = new Array("colleagueName","collegueName");        
    //Busca o dataset
    var data = DatasetFactory.getDataset("colleague", null, constraints, sortingFields);
    console.log(data)
    var userNome = data.values[0].colleagueName
    var userMail = data.values[0].mail

    const tipo = document.getElementById("tipo").value
    const nome = document.getElementById("nomeCompleto").value
    const setor = document.getElementById("setor").value
    const cargo = document.getElementById("cargo").value
    const email = document.getElementById("emailColaborador").value
    const aprovador = document.getElementById("aprovador").value
    const emailApro = document.getElementById("emailAprovador").value
    var dataAtual = new Date()
    const dia = atualizaData(dataAtual.getDate());
	const mes = atualizaData(dataAtual.getMonth() + 1);
	const ano = dataAtual.getFullYear();
    const dataA = dia+'/'+mes+'/'+ano;

    const ad = document.getElementById("ad")
    const protheus = document.getElementById("Protheus")
    const fluig = document.getElementById("fluig")
    const tae = document.getElementById("TAE")
    const transmite = document.getElementById("Transmite")
    const rm = document.getElementById("RM")

    //modulos do protheus
    const compras = document.getElementById("compras")
    const contasPagar = document.getElementById("contaPagar")
    const contabilidade = document.getElementById("Contabilidade")
    const faturamento = document.getElementById("Faturamento")
    const ativoFixo = document.getElementById("AtivoFixo")
    const estoqueCusto = document.getElementById("EstoqueCusto")
    const contasReceber = document.getElementById("contaReceber")
    const tesouraria = document.getElementById("tesouraria")
    const recursosHumano = document.getElementById("rh")
    const taf = document.getElementById("TAF")
    const livrosFiscais = document.getElementById("LivrosFiscais")
    const configurador = document.getElementById("Configurador")

    //acessos do fluig
    const gedParcial = document.getElementById("gedParc")
    const gedTotal = document.getElementById("gedTot")
    const processoParcial = document.getElementById("proParc")
    const processoTotal = document.getElementById("proTot")
    const configuradorParcial = document.getElementById("cfgParc")
    const configuradorTotal = document.getElementById("cfgTot")

    const inclusao = document.getElementById("Inclusao")
    const altera   = document.getElementById("Alteracao")
    const desliga  = document.getElementById("Desativacao")

    $("#AcessoEspPro").hide();
    $("#AcessoEspFluig").hide();
    $("#novoColaborador1").hide();
    $("#novoColaborador2").hide();
    $("#novoColaborador3").hide();
    $("#novoColaborador4").hide();
    $("#desliga.checkedmento1").hide();
    $("#desliga.checkedmento2").hide();
    $("#desliga.checkedmento3").hide();
    $("#atiAD").hide();
    $("#atiPro").hide();
    $("#atiProCompras").hide();
    $("#atiProContaPagar").hide();
    $("#atiProContabilidade").hide();
    $("#atiProFaturamento").hide();
    $("#atiProAtivoFixo").hide();
    $("#atiProEstoqueCusto").hide();
    $("#atiProContasReceber").hide();
    $("#atiProTesouraria").hide();
    $("#atiProRecursosHumanos").hide();
    $("#atiProTAF").hide();
    $("#atiProLivrosFiscaiss").hide();
    $("#atiProContaConfigurador").hide();
    $("#atiFluigIdentity").hide();
    $("#atiFluigLicenca").hide();
    $("#atiFluigGedTot").hide();
    $("#atiFluigGedParc").hide();
    $("#atiFluigProcessoTot").hide();
    $("#atiFluigProcessoParc").hide();
    $("#atiFluigConfiguradorTot").hide();
    $("#atiFluigConfiguradorParc").hide();
    $("#atiTransmite").hide();
    $("#atiTae").hide();
    $("#atiRM").hide();
    
    seleciona(tipo,'define');

    defineValor(nome,'docNome')
    defineValor(setor,'docDepartamento')
    defineValor(cargo,'docCargo')
    defineValor(email,'docEmail')
    defineValor(aprovador,'docAprovador')
    defineValor(emailApro,'docEmailAprovador')
    defineValor(dataA,'docDataGest')
    defineValor(dataA,'docDataSup')
    defineValor(dataA,'docData')
    defineValor(dataA,'docDatRt')
    defineValor(userNome,'docNomeRt')
    defineValor(userMail,'docEmailRt')

    definetipo()

    if(tipo == "Novo Colaborador"){
        console.log(tipo)
        $("#novoColaborador1").show();
        $("#novoColaborador2").show();
        $("#novoColaborador3").show();
        $("#novoColaborador4").show();
    }else if(tipo == "desligamento de colaborador"){
        console.log(tipo)
        $("#desliga.checkedmento1").show();
        $("#desliga.checkedmento2").show();
        $("#desliga.checkedmento3").show();
    }

    if(ad.checked == true){
        verificaSeleção(ad,'docADlib')
        if(inclusao.checked == true){
            $("#RevogarAd").hide();
            $("#atiAD").show();
            $("#CriarAd").show();
        }else if (desliga.checked == true){
            $("#CriarAd").hide();
            $("#atiAD").show();
            $("#RevogarAd").show();
        }
    }else{
        var verifi = verificaServico(nome,email,ad.id)
        id = 'docADlib'
        if( verifi == true){
            if(desliga == true){
                document.getElementById(id).innerHTML = "Revogado"
            }else{
                document.getElementById(id).innerHTML = "Não liberado"
            }
        }
    }
    if(protheus.checked == true){
        if(tipo != '' && tipo != 'Outro'){
            $('#AcessoEspPro').show();
        }
        verificaSeleção(protheus,'docProLib')
        if(inclusao.checked == true ){
            $("#bloqUserProtheus").hide();
            $("#atiPro").show();
            $("#novoUserProtheus").show();
        }else if(desliga.checked == true){
            $("#novoUserProtheus").hide();
            $("#atiPro").show();
            $("#bloqUserProtheus").show();
        }   
        if(compras.checked == true){
            verificaSeleção(compras,'docCompralib')
            if(inclusao.checked == true ){
                $("#revCompra").hide();
                $("#atiProCompras").show();
                $("#libCompra").show();
            }else if(desliga.checked == true){
                $("#libCompra").hide();
                $("#atiProCompras").show();
                $("#revCompra").show();
            }            
        }
        if(contasPagar.checked == true){
            verificaSeleção(contasPagar,'docContPaglib')
            if(inclusao.checked == true ){
                $("#revContPg").hide();
                $("#atiProContaPagar").show();
                $("#libContPg").show();
            }else if(desliga.checked == true){
                $("#libContPg").hide();
                $("#atiProContaPagar").show();
                $("#revContPg").show();
            }
        }
        if(contabilidade.checked == true){
            verificaSeleção(contabilidade,'docContablib')
            if(inclusao.checked == true ){
                $("#RevCtb").hide();
                $("#atiProContabilidade").show();
                $("#libCtb").show();
            }else if(desliga.checked == true){
                $("#libCtb").hide();
                $("#atiProContabilidade").show();
                $("#RevCtb").show();
            }
        }
        if(faturamento.checked == true){
            verificaSeleção(faturamento,'docfatlib')
            if(inclusao.faturamento == true ){
                $("#RevFat").hide();
                $("#atiProFaturamento").show();
                $("#libFat").show();
            }else if(desliga.checked == true){
                $("#libFat").hide();
                $("#atiProFaturamento").show();
                $("#RevFat").show();
            }
        }
        if(ativoFixo.checked == true){
            verificaSeleção(ativoFixo,'docAtflib')
            if(inclusao.checked == true ){
                $("#revAtf").hide();
                $("#atiProAtivoFixo").show();
                $("#libAtf").show();
            }else if(desliga.checked == true){
                $("#libAtf").hide();
                $("#atiProAtivoFixo").show();
                $("#revAtf").show();
            }
        }
        if(estoqueCusto.checked == true){
            verificaSeleção(estoqueCusto,'docestlib')
            if(inclusao.checked == true ){
                $("#revEst").hide();
                $("#atiProEstoqueCusto").show();
                $("#libEst").show();
            }else if(desliga.checked == true){
                $("#libEst").hide();
                $("#atiProEstoqueCusto").show();
                $("#revEst").show();
            }
        }
        if(contasReceber.checked == true){
            verificaSeleção(contasReceber,'docContReclib')
            if(inclusao.checked == true ){
                $("#revContRec").hide();
                $("#atiProContasReceber").show();
                $("#libContRec").show();
            }else if(desliga.checked == true){
                $("#libContRec").hide();
                $("#atiProContasReceber").show();
                $("#revContRec").show();
            }
        }
        if(tesouraria.checked == true){
            verificaSeleção(tesouraria,'docTeslib')
            if(inclusao.checked == true ){
                $("#revTes").hide();
                $("#atiProTesouraria").show();
                $("#libTes").show();
            }else if(desliga.checked == true){
                $("#libTes").hide();
                $("#atiProTesouraria").show();
                $("#revTes").show();
            }
        }
        if(recursosHumano.checked == true){
            verificaSeleção(recursosHumano,'docRhlib')
            if(inclusao.checked == true ){
                $("#revRh").hide();
                $("#atiProRecursosHumanos").show();
                $("#libRh").show();
            }else if(desliga.checked == true){
                $("#libRh").hide();
                $("#atiProRecursosHumanos").show();
                $("#revRh").show();
            }
        }
        if(taf.checked == true){
            verificaSeleção(taf,'doctaflib')
            if(inclusao.checked == true ){
                $("#revTaf").hide();
                $("#atiProTAF").show();
                $("#libTaf").show();
            }else if(desliga.checked == true){
                $("#libTaf").hide();
                $("#atiProTAF").show();
                $("#revTaf").show();
            }
        }
        if(livrosFiscais.checked == true){
            verificaSeleção(livrosFiscais,'doclivrolib')
            if(inclusao.checked == true ){
                $("#revLiv").hide();
                $("#atiProLivrosFiscaiss").show();
                $("#libLiv").show();
            }else if(desliga.checked == true){
                $("#libLiv").hide();
                $("#atiProLivrosFiscaiss").show();
                $("#revLiv").show();
            }
        }
        if(configurador.checked == true){
            verificaSeleção(configurador,'doccfglib')
            if(inclusao.checked == true ){
                $("#revCfg").hide();
                $("#atiProContaConfigurador").show();
                $("#libCfg").show();
            }else if(desliga.checked == true){
                $("#libCfg").hide();
                $("#atiProContaConfigurador").show();
                $("#revCfg").show();
            }
        }
    }else{
        var verifi = verificaServico(nome,email,ad.id)
        if( verifi == true){
            id = 'docProLib'
            if(desliga == true){
                document.getElementById(id).innerHTML = "Revogado"
            }else{
                document.getElementById(id).innerHTML = "Não liberado"
            }
        }
    }
    if(fluig.checked == true){
        if(tipo != '' && tipo != 'Outro'){
            $('#AcessoEspFluig').show();
        }
        verificaSeleção(fluig,'docFluigLib');
        if(inclusao.checked == true ){
            $("#desatFluig").hide();
            $("#bloqIdentity").hide();
            $("#atiFluigIdentity").show();
            $("#criarIdentity").show();
            $("#atiFluigLicenca").show();
            $("#criarFluig").show();
        }else if(desliga.checked == true){
            $("#criarFluig").hide();
            $("#criarIdentity").hide();
            $("#atiFluigIdentity").show();
            $("#bloqIdentity").show();
            $("#atiFluigLicenca").show();
            $("#desatFluig").show();
        }
        if(gedParcial.checked == true){
            verificaSeleção2(gedParcial,'docgedlib','Parc')
            if(inclusao.checked == true ){
                $("#revParcGed").hide();
                $("#atiFluigGedParc").show();
                $("#libParcGed").show();
            }else if(desliga.checked == true){
                $("#libParcGed").hide();
                $("#atiFluigGedParc").show();
                $("#revParcGed").show();
            }
        }else if(gedTotal.checked == true){
            verificaSeleção2(gedTotal,'docgedlib','Tot')
            if(inclusao.checked == true ){
                $("#RevTotGed").hide();
                $("#atiFluigGedTot").show();
                $("#libTotGed").show();
            }else if(desliga.checked == true){
                $("#libTotGed").hide();
                $("#atiFluigGedTot").show();
                $("#RevTotGed").show();
            }
        }
        if(processoParcial.checked == true){
            verificaSeleção2(processoParcial,'docprocessolib','Parc')
            if(inclusao.checked == true ){
                $("#revParcPro").hide();
                $("#atiFluigProcessoParc").show();
                $("#libParcPro").show();
            }else if(desliga.checked == true){
                $("#libParcPro").hide();
                $("#atiFluigProcessoParc").show();
                $("#revParcPro").show();
            }
        }else if(processoTotal.checked == true){
            verificaSeleção2(processoTotal,'docprocessolib','Tot')
            if(inclusao.checked == true ){
                $("#revTotPro").hide();
                $("#atiFluigProcessoTot").show();
                $("#libTotPro").show();
            }else if(desliga.checked == true){
                $("#libTotPro").hide();
                $("#atiFluigProcessoTot").show();
                $("#revTotPro").show();
            }
        }
        if(configuradorParcial.checked == true){
            verificaSeleção2(configuradorParcial,'docConfiglib','Parc')
            if(inclusao.checked == true ){
                $("#revParcCfg").hide();
                $("#atiFluigConfiguradorParc").show();
                $("#libParcCfg").show();
            }else if(desliga.checked == true){
                $("#libParcCfg").hide();
                $("#atiFluigConfiguradorParc").show();
                $("#revParcCfg").show();
            }
        }else if(configuradorTotal.checked == true){
            verificaSeleção2(configuradorTotal,'docConfiglib','Tot')
            if(inclusao.checked == true ){
                $("#revTotCfg").hide();
                $("#atiFluigConfiguradorTot").show();
                $("#libTotCfg").show();
            }else if(desliga.checked == true){
                $("#libTotCfg").hide();
                $("#atiFluigConfiguradorTot").show();
                $("#revTotCfg").show();
            }
        }
    }else{
        var verifi = verificaServico(nome,email,ad.id)
        if( verifi == true){
            id='docFluigLib'
            if(desliga == true){
                document.getElementById(id).innerHTML = "Revogado"
            }else{
                document.getElementById(id).innerHTML = "Não liberado"
            }
        }
    }
    if(tae.checked == true){
        verificaSeleção(tae,'docTaeLib')
        if(inclusao.checked == true ){
            $("#RevTae").hide();
            $("#atiTae").show();
            $("#libTae").show();
        }else if(desliga.checked == true){
            $("#RevTae").hide();
            $("#atiTae").show();
            $("#libTae").show();
        }
    }else{
        var verifi = verificaServico(nome,email,ad.id)
        if( verifi == true){
            id = 'docTaeLib'
            if(desliga == true){
                document.getElementById(id).innerHTML = "Revogado"
            }else{
                document.getElementById(id).innerHTML = "Não liberado"
            }
        }
    }
    if(transmite.checked == true){
        verificaSeleção(transmite,'docTransLib')
        if(inclusao.checked == true ){
            $("#revTransmite").hide();
            $("#atiTransmite").show();
            $("#libTransmite").show();
        }else if(desliga.checked == true){
            $("#libTransmite").hide();
            $("#atiTransmite").show();
            $("#revTransmite").show();
        }
    }else{
        var verifi = verificaServico(nome,email,transmite.id)
        if( verifi == true){
            id ='docTransLib'
            if(desliga == true){
                document.getElementById(id).innerHTML = "Revogado"
            }else{
                document.getElementById(id).innerHTML = "Não liberado"
            }
        }
    }
    if(rm.checked == true){
        verificaSeleção(rm,'docRmLib')
        if(inclusao.checked == true ){
            $("#revRM").hide();
            $("#atiRM").show();
            $("#libRM").show();
        }else if(desliga.checked == true){
            $("#libRM").hide();
            $("#atiRM").show();
            $("#revRM").show();
        }
    }else{
        var verifi = verificaServico(nome,email,rm.id)
        if( verifi == true){
            id='docRmLib'
            if(desliga == true){
                document.getElementById(id).innerHTML = "Revogado"
            }else{
                document.getElementById(id).innerHTML = "Não liberado"
            }
        }
    }

   
}

function openEsp(value,id) {
    const protheus = document.getElementById("Protheus")
    const fluig = document.getElementById("fluig")
    $('#AcessoEspPro').hide();
    $('#AcessoEspFluig').hide();
    if(protheus.checked == true){
        $('#AcessoEspPro').show();
    }
    if(fluig.checked == true){
        $('#AcessoEspFluig').show();
    }
    verificaSeleção(value,id)
}

var aUser = [];
var aColaboradores = [];

var idNome 
var idMail
var dadosUser = []

function consultaUser(id,id2) {
    const typeUser = document.getElementById('tipo').value
    var nome = document.getElementById(id).value
    console.log(nome)
    idNome = id
    idMail = id2
    
    
    if(nome != ''){
        //Monta as constraints para consulta
        var constraints = new Array();
        constraints.push(DatasetFactory.createConstraint("nomeCompleto", nome, nome, ConstraintType.SHOULD, true));
            
        //Define os campos para ordenação
        var sortingFields = new Array("nomeCompleto","nomeCompleto");
            
        //Busca o dataset
        var data = DatasetFactory.getDataset("dsAtualizacaoColaboradores", null, constraints, sortingFields);
        console.log(data)
        var count = data.values.length;
        console.log(count)
        if (count > 0){
            var nome = ''
            contad = 0
            while(aColaboradores.length > 0){
                aColaboradores.pop();
            }
            for (let contador = 0; contador < count; contador++) {
                if(nome != data.values[contador].nomeCompleto){
                    contad ++
                    nome = data.values[contador].nomeCompleto
                    let userAtual = {
                        NomeCliente: data.values[contador].nomeCompleto,
                        Email: data.values[contador].emailColaborador
                    };
                    // Adiciona o objeto do cliente ao array de clientes
                    aColaboradores.push(userAtual);
                }
            }
            count = contad
            console.log('novo valor do count '+ count)
            if(typeUser == 'Novo Colaborador'){
                FLUIGC.message.confirm({
                    message: 'Foi encontrado usuário com esse nome, deseja proceguir',
                    title: 'Usuário localizado',
                    labelYes: 'Sim',
                    labelNo: 'Não'
                }, function(result, el, ev) {
                    //Callback action executed by the user...
                     
                    //result: Result chosen by the user...
                    //el: Element (button) clicked...
                    //ev: Event triggered...
                    console.log(result)
                    console.log(el)
                    console.log(ev)
                    if(result == true){
                        var select = document.getElementById("usuarios");
                        while (select.options.length > 0) { 
                            select.remove(0);
                        }
                        while(aUser.length > 0){
                            aUser.pop();
                        }
                        if (count > 1) {
                            if(count >= 9){
                                select.setAttribute("size", 9);
                            }else{
                                select.setAttribute("size", count);
                            }
                            document.getElementById('TitModal').innerHTML = 'O sistema encontrou '+count+' usuários, selecione o usuário correto'
                            nome = ''
                            for (let i = 0; i < count; i++) {
                                var option = new Option(aColaboradores[i].NomeCliente, i.toString())
                                select.add(option);
                                let userAtual = {
                                    NomeCliente: aColaboradores[i].NomeCliente,
                                    Email: aColaboradores[i].Email
                                };
                                
                                // Adiciona o objeto do cliente ao array de clientes
                                aUser.push(userAtual);
                            }
                            abrirModal()
                            //alert("O cliente possui "+count+" lotes:\n")
                        }else{
                            document.getElementById(idNome).value = aColaboradores[0].NomeCliente;
                            document.getElementById(idMail).value = aColaboradores[0].Email;
                            if(id != 'aprovador' || typeUser != 'Novo Colaborador'){
                                verificaUser(aColaboradores[0].NomeCliente,aColaboradores[0].Email)
                            }
                        }
                    }

                });
            }else{
                var select = document.getElementById("usuarios");
                while (select.options.length > 0) { 
                    select.remove(0);
                }
                while(aUser.length > 0){
                    aUser.pop();
                }
                if (count > 1) {
                    if(count >= 9){
                        select.setAttribute("size", 9);
                    }else{
                        select.setAttribute("size", count);
                    }
                    document.getElementById('TitModal').innerHTML = 'O sistema encontrou '+count+' usuários, selecione o usuário correto'
                    for (let i = 0; i < count; i++) {
                        var option = new Option(aColaboradores[i].NomeCliente, i.toString())
                        select.add(option);
                        let userAtual = {
                            NomeCliente: aColaboradores[i].NomeCliente,
                            Email: aColaboradores[i].Email
                        };
                        
                        // Adiciona o objeto do cliente ao array de clientes
                        aUser.push(userAtual);
                    }
                    abrirModal()
                    //alert("O cliente possui "+count+" lotes:\n")
                }else{
                    document.getElementById(idNome).value = aColaboradores[0].NomeCliente;
                    document.getElementById(idMail).value = aColaboradores[0].Email;
                    if(id != 'aprovador' && typeUser != 'Novo Colaborador'){
                        verificaUser(aColaboradores[0].NomeCliente,aColaboradores[0].Email)
                    }
                }
            }
        }        
    }
}

function abrirModal(){
    var div = document.getElementById('janela-modal1')
    div.style.display = "flex";
}

function selecionaUser() {
    const typeUser = document.getElementById('tipo').value
    var x = parseInt(document.getElementById("usuarios").value);
    document.getElementById(idNome).value = aUser[x].NomeCliente;
    document.getElementById(idMail).value = aUser[x].Email;
    if(idNome != 'aprovador' && typeUser != 'Novo Colaborador'){
        verificaUser(aUser[x].NomeCliente,aUser[x].Email)
    }
    var div = document.getElementById('janela-modal1')
    div.style.display = "none";
}

function cancelar() {
    var div = document.getElementById('janela-modal1')
    div.style.display = "none";
}

function atualizaData(data){
    var i = parseInt(data)
    if(i < 10){
        i = '0'+i;
    }
    return i;
}

function verificaUser(user,email) {
    const typeUser = document.getElementById('tipo').value
    var constraints = new Array();
    constraints.push(DatasetFactory.createConstraint("nomeCompleto", user, user, ConstraintType.SHOULD, true));
    constraints.push(DatasetFactory.createConstraint("emailColaborador", email, email, ConstraintType.SHOULD, true));
    //Busca o dataset
    var data = DatasetFactory.getDataset("dsAtualizacaoColaboradores", null, constraints, null);
    if(data.values.length > 0 && idNome == 'nomeCompleto' && typeUser != 'Novo Colaborador'){
        var i = data.values.length - 1
        
            if(data.values[i].fluig == 'on'){
                document.getElementById('fluig').checked = true
                if (typeUser != '' && typeUser != 'Outro'){
                    console.log('tipo: '+typeUser)
                    $('#AcessoEspFluig').show();
                }
            }
            if(data.values[i].Protheus == 'on'){
                document.getElementById('Protheus').checked = true
                if (typeUser != '' && typeUser != 'Outro'){
                    console.log('tipo: '+typeUser)
                    $('#AcessoEspPro').show();
                }
            }
        
        
        document.getElementById('setor').value       = data.values[i].setor;
        document.getElementById('cargo').value       = data.values[i].cargo;
        document.getElementById('obs').value         = data.values[i].obs.replace("\n", "<br>");
        document.getElementById('ad').checked        = (data.values[i].ad == 'on') ? true : false;
        document.getElementById('TAE').checked       = (data.values[i].TAE == 'on') ? true : false;
        document.getElementById('Transmite').checked = (data.values[i].Transmite == 'on') ? true : false;
        document.getElementById('RM').checked        = (data.values[i].RM == 'on') ? true : false;

        document.getElementById('compras').checked       = (data.values[i].compras == 'on') ? true : false;
        document.getElementById('contaPagar').checked    = (data.values[i].contaPagar == 'on') ? true : false;
        document.getElementById('Contabilidade').checked = (data.values[i].Contabilidade == 'on') ? true : false;
        document.getElementById('Faturamento').checked   = (data.values[i].Faturamento == 'on') ? true : false;
        document.getElementById('AtivoFixo').checked     = (data.values[i].AtivoFixo == 'on') ? true : false;
        document.getElementById('EstoqueCusto').checked  = (data.values[i].EstoqueCusto == 'on') ? true : false;
        document.getElementById('contaReceber').checked  = (data.values[i].contaReceber == 'on') ? true : false;
        document.getElementById('tesouraria').checked    = (data.values[i].tesouraria == 'on') ? true : false;
        document.getElementById('rh').checked            = (data.values[i].rh == 'on') ? true : false;
        document.getElementById('TAF').checked           = (data.values[i].TAF == 'on') ? true : false;
        document.getElementById('LivrosFiscais').checked = (data.values[i].LivrosFiscais == 'on') ? true : false;
        document.getElementById('Configurador').checked  = (data.values[i].Configurador == 'on') ? true : false;
        
        document.getElementById('gedParc').checked = (data.values[i].gedParc == 'on') ? true : false;
        document.getElementById('gedTot').checked  = (data.values[i].gedTot == 'on') ? true : false;
        document.getElementById('proParc').checked = (data.values[i].proParc == 'on') ? true : false;
        document.getElementById('proTot').checked  = (data.values[i].proTot == 'on') ? true : false;
        document.getElementById('cfgParc').checked = (data.values[i].cfgParc == 'on') ? true : false;
        document.getElementById('cfgTot').checked  = (data.values[i].cfgTot == 'on') ? true : false;

        adicionaAtividade()
    }else{
        document.getElementById('fluig').checked     = false;
        document.getElementById('Protheus').checked  = false;
        document.getElementById('ad').checked        = false;
        document.getElementById('TAE').checked       = false;
        document.getElementById('Transmite').checked = false;
        document.getElementById('RM').checked        = false;

        document.getElementById('compras').checked       = false;
        document.getElementById('contaPagar').checked    = false;
        document.getElementById('Contabilidade').checked = false;
        document.getElementById('Faturamento').checked   = false;
        document.getElementById('AtivoFixo').checked     = false;
        document.getElementById('EstoqueCusto').checked  = false;
        document.getElementById('contaReceber').checked  = false;
        document.getElementById('tesouraria').checked    = false;
        document.getElementById('rh').checked            = false;
        document.getElementById('TAF').checked           = false;
        document.getElementById('LivrosFiscais').checked = false;
        document.getElementById('Configurador').checked  = false;

        document.getElementById('gedParc').checked = false;
        document.getElementById('gedTot').checked  = false;
        document.getElementById('proParc').checked = false;
        document.getElementById('proTot').checked  = false;
        document.getElementById('cfgParc').checked = false;
        document.getElementById('cfgTot').checked  = false;
    }
}

function BuscaUser(valor,idDoc,id1,id2) {
    defineValor(valor,idDoc)
    consultaUser(id1,id2)
}

function verificaServico(user, email, coluna){
    var constraints = new Array();
    constraints.push(DatasetFactory.createConstraint("nomeCompleto", user, user, ConstraintType.SHOULD, true));
    constraints.push(DatasetFactory.createConstraint("emailColaborador", email, email, ConstraintType.SHOULD, true));
    //Busca o dataset
    var data = DatasetFactory.getDataset("dsAtualizacaoColaboradores", null, constraints, null);
    var cont = data.values.length
    if ( cont > 0){
        if(data.values[cont-1][coluna] == 'on'){
            return true
        }
    }
    return false
}

function defineTexto(value,id) {
    var valorObs = ''+value
    document.getElementById('obsTXT').value =  valorObs.replaceAll('.  ','.<br/>')
    defineValor(document.getElementById('obsTXT').value,id)
}