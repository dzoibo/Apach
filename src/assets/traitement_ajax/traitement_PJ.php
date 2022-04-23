<!-- ICI IL EST QUESTION DE RECUPERER LES PRODUITS MIS EN FAVORIS ET LES AFFICHER -->
<!--  1- connexion a la BD et recuperer l'id du user qui essaie de joindre un produit à son message-->
    <!-- 2- Verifier les elements POSTER via Ajax ou autres (id du recepteur) -->   
    <!-- 3-  verifier la table produit_favorie et afficher le panier des favories comme le template suivant le demande-->

    <?php 
        echo '
        <div id="list-card">
        <div id="show-list-card1" class="list-item list-item1" data-id="1">
            <div class="cart-image">
                <img src="assets/img/iphone.jpg">
            </div>
            <div class="cart-box">
                <span class="cart-box-title">
                    Produit 001
                </span>
                <span class="cart-box-price">
                    <span class="eachPrice">5.000 Fcfa</span>
                </span>
            </div>
            <div class="item-form checkbox-item">
                <input type="checkbox"  checked="checked" name="prod" class="control-form">
                <span class="checkmark"></span>
            </div>
            <!-- <i class="fas fa-trash-alt remove cart-remove"></i> -->
        </div>
        <div id="show-list-card2" class="list-item list-item2" data-id="2">
            <div class="cart-image">
                <img src="assets/img/p2.jpg">
            </div>
            <div class="cart-box">
                <span class="cart-box-title">
                    Produit 002
                </span>
                <span class="cart-box-price">
                    <span class="eachPrice">6.000 Fcfa</span>
                </span>
            </div>
            <div class="item-form checkbox-item">
                <input type="checkbox"  checked="checked" name="prod" class="control-form">
                <span class="checkmark"></span>
            </div>
            <!-- <i class="fas fa-trash-alt remove cart-remove"></i> -->
        </div>
    </div>
        ';
    ?>