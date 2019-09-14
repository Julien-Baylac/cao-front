<template>
    <div>
        <div class="row">
            <div id='div_cabane' class="col s12">
                <img id="img_cabane" :src="pathImage" alt="img_cabane">
            </div>
        </div>
        <div class="row">
            <div class="col s3 offset-s9">
                <a class="btn-floating waves-effect waves-light btn_close"><i class="material-icons">close</i></a>
            </div>
        </div>
        <div class="row div_content">
            <div class="div_titres">
                <div class="row" style="margin-top:20px">
                    <div class="col s9">
                        <p class="name_cabane">Les Coccinelles</p>
                        <p class="type_cabane">Association</p>
                    </div>
                    <div class="col s3">
                        <a class="waves-effect waves-light btn-small btn_adherer btn-flat"><p style="margin-top:-4px;">Adhérer</p></a>
                    </div>
                </div>
                <p class="description_cabane">Un descriptif de l'assocation ecrit par le directeur lors de la création de la cabane association</p>
            </div>
            <div class="row div_nb">
                <div class="col s4" align="center" style="margin-top:8px;">
                    <p class="nb">3</p>
                    <p>Membre(s)</p>
                </div>
                <div class="col s4" align="center">
                    <p class="nb">2</p>
                    <p>Badge(s)<br><span>de Formations</span></p>
                </div>
                <div class="col s4" align="center" style="margin-top:8px;">
                    <p class="nb">0</p>
                    <p>Visites</p>
                </div>
            </div>
            <div class="div_list_badges">
                <p style="margin-bottom:20px">Badges de la cabane parmis ceux qui vous interessent</p>
                <div class="row badge" style="margin-bottom:10px">
                    <div class="col s3">
                        <img class="icon_badges" src="../assets/icons/badges/lotus-flower.svg" alt="icon_badge">
                    </div>
                    <div class="col s9">
                        <p><span>Espace calme</span></p>
                        <p>Cet établissement propose un espace calme</p>
                    </div>
                </div>
                <div class="row badge" style="margin-bottom:10px">
                    <div class="col s3">
                        <img class="icon_badges" src="../assets/icons/badges/lotus-flower.svg" alt="icon_badge">
                    </div>
                    <div class="col s9">
                        <p><span>Luminosité</span></p>
                        <p>Cet établissement propose un espace calme</p>
                    </div>
                </div>
                <div class="row badge" style="margin-bottom:10px">
                    <div class="col s3">
                        <img class="icon_badges" src="../assets/icons/badges/lotus-flower.svg" alt="icon_badge">
                    </div>
                    <div class="col s9">
                        <p><span>Espace calme</span></p>
                        <p>Cet établissement propose un espace calme</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .btn_adherer {
        background-color: #85ACCA;
        font-size: 10px;
        text-transform: capitalize;
        height: 25px;
        color:white;
    }
    .badge {
        border: 1px solid #DCD6D6;
        border-radius: 7px;
        padding: 6px;

    }
    .icon_badges {
        height: 35px;
        width: 35px;
        margin-top: 7px;
    }
    .nb {
        font-size: 23px;
    }
    span {
        color: #525252;
    }
    p {
        margin: 0px;
    }
    .row {
        margin: 0px;
    }
    #img_cabane {
        width: 100%;
    }
    #div_cabane {
        padding: 0px;
    }
    .btn_close {
        background-image:linear-gradient(#7284FF, #84C3DE) !important;
        border-radius: 50px;
        color: white;
        height: 40px;
        width: 40px;
        margin-top: -35px;
    }
    .div_content {
        padding-right: 35px;
        padding-left: 35px;

    }
    .name_cabane {
        font-size: 14px;
        color: #4A4A4A;
    }
    .type_cabane {
        font-size: 13px;
        color: #9D9D9D;
        margin-bottom: 10px;
    }
    .description_cabane {
        font-size: 11px;
        color: #9D9D9D;
        padding-bottom: 20px;
        border-bottom: 1px solid #979797;
    }
    .div_nb {
        margin-top: 12px;
        color: #919091;
        font-size: 12px;
        padding-bottom: 17px;
        border-bottom: 1px solid #979797;
    }
    .div_list_badges {
        margin-top: 20px;
        font-size: 12px;
        color: #9D9D9D;
        margin-bottom: 40px;
    }
    .col {
        padding: 0px;
    }
</style>
