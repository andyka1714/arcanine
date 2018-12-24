<template>
  <div class="side-bar">
    <ul>
    	<router-link tag="li" class="item active" to="/test">
    		<i class="fas fa-wallet"></i>
    		<span>總覽</span>
    	</router-link>
    	<li class="item">
    		<label for="transfer">
	    		<i class="fas fa-university"></i>
	    		<span>內部轉帳</span>
	    		<i class="fas fa-angle-down"></i>
    		</label>
    		<input type="checkbox" id="transfer">
    		<div class="sub-link">
	        	<router-link tag="li" to="/test">
	        		<i class="fas fa-circle"></i>
	        		<span>測試</span>
	        	</router-link>
	        	<router-link tag="li" to="/test">
	        		<i class="fas fa-circle"></i>
	        		<span>測試</span>
	        	</router-link>
    		</div>
    	</li>
    	<li class="item">
    		<label for="recharge">
	    		<i class="fas fa-hand-holding-usd"></i>
	    		<span>充值</span>
	    		<i class="fas fa-angle-down"></i>
    		</label>
    		<input type="checkbox" id="recharge">
    		<div class="sub-link">
	        	<router-link tag="li" to="/test">
	        		<i class="fas fa-circle"></i>
	        		<span>測試</span>
	        	</router-link>
	        	<router-link tag="li" to="/test">
	        		<i class="fas fa-circle"></i>
	        		<span>測試</span>
	        	</router-link>
    		</div>
    	</li>
    	<li class="item">
    		<label for="card">
	    		<i class="fab fa-cc-visa"></i>
	    		<span>卡片</span>
	    		<i class="fas fa-angle-down"></i>
    		</label>
    		<input type="checkbox" id="card">
    		<div class="sub-link">
	        	<router-link tag="li" to="/test">
	        		<i class="fas fa-circle"></i>
	        		<span>測試</span>
	        	</router-link>
	        	<router-link tag="li" to="/test">
	        		<i class="fas fa-circle"></i>
	        		<span>測試</span>
	        	</router-link>
    		</div>
    	</li>
    	<router-link tag="li" class="item" to="/test">
    		<i class="fas fa-user-alt"></i>
    		<span>設置</span>
    	</router-link>
    	<li class="item">
    		<label for="financialManagement">
	    		<i class="fas fa-piggy-bank"></i>
	    		<span>理財</span>
	    		<i class="fas fa-angle-down"></i>
    		</label>
    		<input type="checkbox" id="financialManagement">
    		<div class="sub-link">
	        	<router-link tag="li" to="/test">
	        		<i class="fas fa-circle"></i>
	        		<span>測試</span>
	        	</router-link>
	        	<router-link tag="li" to="/test">
	        		<i class="fas fa-circle"></i>
	        		<span>測試</span>
	        	</router-link>
    		</div>
    	</li>
    	<li class="item">
    		<label for="game">
	    		<i class="fas fa-gamepad"></i>
	    		<span>遊戲</span>
	    		<i class="fas fa-angle-down"></i>
    		</label>
    		<input type="checkbox" id="game">
    		<div class="sub-link">
	        	<router-link tag="li" to="/test">
	        		<i class="fas fa-circle"></i>
	        		<span>測試</span>
	        	</router-link>
	        	<router-link tag="li" to="/test">
	        		<i class="fas fa-circle"></i>
	        		<span>測試</span>
	        	</router-link>
    		</div>
    	</li>
    	<li class="item">
    		<label for="product">
	    		<i class="fas fa-briefcase"></i>
	    		<span>商品</span>
	    		<i class="fas fa-angle-down"></i>
    		</label>
    		<input type="checkbox" id="product">
    		<div class="sub-link">
	        	<router-link tag="li" to="/test">
	        		<i class="fas fa-circle"></i>
	        		<span>測試</span>
	        	</router-link>
	        	<router-link tag="li" to="/test">
	        		<i class="fas fa-circle"></i>
	        		<span>測試</span>
	        	</router-link>
    		</div>
    	</li>
    	<li class="item">
    		<label for="blockchain">
	    		<i class="fab fa-bitcoin"></i>
	    		<span>區塊鏈</span>
	    		<i class="fas fa-angle-down"></i>
    		</label>
    		<input type="checkbox" id="blockchain">
    		<div class="sub-link">
	        	<router-link tag="li" to="/test">
	        		<i class="fas fa-circle"></i>
	        		<span>測試</span>
	        	</router-link>
	        	<router-link tag="li" to="/test">
	        		<i class="fas fa-circle"></i>
	        		<span>測試</span>
	        	</router-link>
    		</div>
    	</li>
    	<li class="item">
    		<label for="other">
	    		<i class="fas fa-th-large"></i>
	    		<span>其他應用</span>
	    		<i class="fas fa-angle-down"></i>
    		</label>
    		<input type="checkbox" id="other">
    		<div class="sub-link">
	        	<router-link tag="li" to="/test">
	        		<i class="fas fa-circle"></i>
	        		<span>測試</span>
	        	</router-link>
	        	<router-link tag="li" to="/test">
	        		<i class="fas fa-circle"></i>
	        		<span>測試</span>
	        	</router-link>
    		</div>
    	</li>
    </ul>
    <i class="far fa-question-circle"></i>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="sass">
.side-bar
	width: 100%
	padding: 20px
	border-radius: 5px
	background-color: white
	color: #999
	.item
		width: 100%
		padding: 15px 20px
		margin-bottom: 10px
		border-radius: 5px
		position: relative
		cursor: pointer
		label
			cursor: pointer
		i
			margin-right: 10px
			width: 30px
			height: 26px
			font-size: 26px
			text-align: center
		span, i
			vertical-align: middle
		.fa-angle-down
			position: absolute
			right: 10px
			top: 16px
			color: #ccc
		.sub-link
			display: none
			margin-top: 20px
			li
				display: flex
				align-items: center
				margin-top: 20px
				.fa-circle
					height: 14px
					font-size: 14px
					text-align: right
				span
					padding-left: 5px
	.item input[type="checkbox"]
	    display: none
	.item input[type="checkbox"]:checked + .sub-link
		display: block
	.active
		background-color: #ecac79
		color: white
	.fa-question-circle
		display: block
		text-align: center
		margin: 70px auto 0
		font-size: 36px
		cursor: pointer
</style>
