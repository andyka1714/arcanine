<template>
	<div class="container">
		<Header></Header>
		<div class="main-wraper">
			<el-row>
				<el-col :span="6" :lg="4">
					<SideBar></SideBar>
				</el-col>
				<el-col :span="18" :lg="20">
					<div class="overview">
						<div class="title-bar">
							<h2 class="title">總覽</h2><!--
							--><div class="account">
								<i class="fas fa-desktop"></i><!--
								--><div class="account-info">
									<p class="account-title">帳戶號碼</p>
									<p class="account-number">1234 1234 1234 1234</p>
								</div><!--
								--><button class="account-btn"><i class="far fa-credit-card"></i> <span>帳戶</span></button>
							</div>
						</div>
						<div class="overview-slider">
							<el-carousel :interval="4000" type="card" height="200px">
							    <el-carousel-item v-for="item in 3" :key="item">
							    	<div class="overview-slider-card">
							    		<div class="account-type-logo">
							    			<i class="fas fa-wallet"></i>
							    			<p>人民幣帳戶</p>
							    		</div>
							    		<p class="amplitude">20% <i class="fas fa-long-arrow-alt-up"></i></p>
							    		<div class="overview-slider-info">
							    			<p class="day">今日</p>
							    			<p class="price">$ <span>4356.21</span></p>
							    			<p class="profit">- $ 150.00</p>
							    		</div>
							    			<p class="account-number">1234-1234-1234-1234</p>
							    	</div>
							    </el-carousel-item>
							</el-carousel>
						</div>
						<div class="account-details">
							<h3 class="account-details-title">美金帳戶 
								<button class="account-btn">
									<i class="far fa-credit-card"></i> 
									<span>帳戶</span>
								</button>
							</h3>
							<div class="account-filter-bar">
								<div class="price">
									USD 4356.21
									<span class="amplitude green">20%</span>
									<i class="fas fa-long-arrow-alt-up"></i>
									<!-- <i class="fas fa-long-arrow-alt-down"></i> -->
								</div>
								<div class="filter-block">
									<input type="text" placeholder="請輸入搜尋關鍵字">
									<i class="fas fa-search"></i>
									<i class="fas fa-sliders-h"></i>
								</div>
							</div>
							<ul class="account-details-list">
								<li class="account-details-item">
									<div class="account-details-info">
										<div class="date">09/04</div>
										<div class="source inside">
											<i class="fas fa-arrow-alt-circle-left"></i>
											<span>內部匯出</span>
										</div>
										<div class="source-account">
											<span class="source-account-top">FROM</span>
											<span class="source-account-bottom">1004-1000-0000-0001</span>
										</div>
									</div><!--
									--><div class="account-details-balance">
										<p>帳戶餘額</p>
										<p>
											USD <span class="number">4355.11</span>
										</p>
									</div>
								</li>
								<li class="account-details-item">
									<div class="account-details-info">
										<div class="date">09/04</div>
										<div class="source outside">
											<i class="fas fa-arrow-alt-circle-right"></i>
											<span>外部匯入</span>
										</div>
										<div class="source-account">
											<span class="source-account-top">FROM</span>
											<span class="source-account-bottom">1004-1000-0000-0001</span>
										</div>
									</div><!--
									--><div class="account-details-balance">
										<p>帳戶餘額</p>
										<p>
											USD <span class="number">4355.11</span>
										</p>
									</div>
								</li>
								<li class="account-details-item">
									<div class="account-details-info">
										<div class="date">09/04</div>
										<div class="source inside">
											<i class="fas fa-arrow-alt-circle-left"></i>
											<span>內部匯出</span>
										</div>
										<div class="source-account">
											<span class="source-account-top">FROM</span>
											<span class="source-account-bottom">1004-1000-0000-0001</span>
										</div>
									</div><!--
									--><div class="account-details-balance">
										<p>帳戶餘額</p>
										<p>
											USD <span class="number">4355.11</span>
										</p>
									</div>
								</li>
								<li class="account-details-item">
									<div class="account-details-info">
										<div class="date">09/04</div>
										<div class="source outside">
											<i class="fas fa-arrow-alt-circle-right"></i>
											<span>外部匯入</span>
										</div>
										<div class="source-account">
											<span class="source-account-top">FROM</span>
											<span class="source-account-bottom">1004-1000-0000-0001</span>
										</div>
									</div><!--
									--><div class="account-details-balance">
										<p>帳戶餘額</p>
										<p>
											USD <span class="number">4355.11</span>
										</p>
									</div>
								</li>
								<li class="account-details-item">
									<div class="account-details-info">
										<div class="date">09/04</div>
										<div class="source inside">
											<i class="fas fa-arrow-alt-circle-left"></i>
											<span>內部匯出</span>
										</div>
										<div class="source-account">
											<span class="source-account-top">FROM</span>
											<span class="source-account-bottom">1004-1000-0000-0001</span>
										</div>
									</div><!--
									--><div class="account-details-balance">
										<p>帳戶餘額</p>
										<p>
											USD <span class="number">4355.11</span>
										</p>
									</div>
								</li>
							</ul>
							<div class="pagination">
							    <el-pagination
									@size-change="handleSizeChange"
									@current-change="handleCurrentChange"
									:current-page.sync="currentPage3"
									:page-size="10"
									layout="prev, pager, next, jumper"
									:total="100"
									:background="true">
							    </el-pagination>
							</div>
						</div>
						<div class="stock">
							<div class="stock-title-bar">
								<h3 class="stock-title">基金庫存</h3>
								<div class="filter-block">
									<button>
							    		<i class="fas fa-piggy-bank"></i> 
							    		<span>我的金融商品</span>
									</button>
									<input type="text" placeholder="請輸入搜尋關鍵字">
									<i class="fas fa-search"></i>
									<i class="fas fa-sliders-h"></i>
								</div>
							</div>
							<div class="stock-slider">
								<el-carousel :interval="4000" type="card" height="270px">
								    <el-carousel-item v-for="item in 3" :key="item">
								    	<div class="stock-slider-card">
											<div class="fund-price">
												<p class="fund-name">好棒基金</p>
												<div class="price">
													<span>USD</span><br>
													<span class="number">14</span>
												</div>
											</div>
											<div class="purchase-date">
												<p><span>申購日</span>2018/09/05</p>
												<p><span>到期日</span>2018/09/07</p>
											</div>
								    	</div>
								    </el-carousel-item>
								</el-carousel>
							</div>
							<div class="stock-block">
								<div class="stock-content">
									<div class="stock-content-left">
										<div class="name">
											<span class="title">基金名稱</span>
											<span class="content">好棒基金</span>
										</div>
										<div class="stock-status">
											<span class="purchasing">申購中</span>
											<p class="orders">
												<span>訂單號碼</span>
												<span>A6886372</span>
											</p>
										</div>
										<button class="detail-info">詳細資訊</button>
									</div><!--
									--><div class="stock-content-right">
										<div class="purchase-info">
											<div class="date">
												<span class="purchase-title">申購日</span>
												<span class="purchase-content">2018/09/05</span>
											</div><!--
											--><div class="date">
												<span class="purchase-title">申購日</span>
												<span class="purchase-content">2018/09/05</span>
											</div><!--
											--><div class="type">
												<span class="purchase-title">幣別</span>
												<span class="purchase-content">美金</span>
											</div><!--
											--><div class="amount">
												<span class="purchase-title">金額</span>
												<span class="purchase-content">2342.11</span>
											</div>
										</div>
										<div class="remarks">
											<div class="remarks-title">
												備註
											</div><!--
											--><div class="remarks-content">
												......備註
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<Footer></Footer>
				</el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import SideBar from "../components/SideBar.vue";
export default {
  name: 'overview',
  components: {
  	Header,
  	Footer,
  	SideBar
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="sass">
.main-wraper
	padding: 20px 40px
	background-color: #f4f4f5
	.overview
		padding: 0 40px 30px 40px
		.account-btn
			cursor: pointer
			width: 90px
			height: 30px
			color: #aaa
			background-color: #eee
			border: 1px solid #ccc
			border-radius: 15px
			font-size: 16px
			i, span
				vertical-align: middle
			i
				font-size: 20px
		.title-bar
			display: flex
			align-items: center
			margin-bottom: 20px
			.title, .account
				display: inline-flex
			.title
				width: calc(100% - 350px)
				color: #4d4d4d
			.account
				width: 350px
				align-items: center
				.fa-desktop
					font-size: 30px
					color: #ccc
					width: 35px
				.account-info
					padding-left: 20px
					display: inline-flex
					flex-direction: column
					color: #4d4d4d
					width: calc(100% - 125px)
		.overview-slider
			width: 100%
			height: 200px
			margin-bottom: 20px
			.overview-slider-card
				height: 100%
				position: relative
				background-image: url('../assets/card-theme-3_green.png')
				background-size: cover
				background-position: center center
				border-radius: 10px
				overflow: hidden
				color: white
				.account-type-logo
					width: 60px
					text-align: center
					position: absolute
					top: 10px
					left: 10px
					i
						font-size: 30px
						margin-bottom: 10px
					p
						font-size: 12px
				.amplitude
					text-align: right
					padding: 10px 20px 0 0
					font-size: 12px
				.overview-slider-info
					width: 40%
					margin: 0 auto
					p
						margin-bottom: 10px
					.price
						span
							font-size: 30px
					.profit
						font-size: 12px
				.account-number
					margin-top: 10px
					font-size: 24px
					text-align: center
		.account-details
			padding: 10px 20px
			.account-details-title
				padding-left: 20px
			.account-filter-bar
				display: flex
				justify-content: space-between
				margin: 10px 0
				padding-left: 20px
				.price
					display: flex
					align-items: center
					.red
						background-color: #FF3333
					.green
						background-color: #33FF33
					.amplitude
						padding: 1px 5px
						font-size: 12px
						color: white
						border-radius: 16px
						margin: 0 5px
					.fa-long-arrow-alt-up
						color: #33FF33
					.fa-long-arrow-alt-down
						color: #FF3333
				.filter-block
					width: 300px
					display: flex
					justify-content: space-between
					align-items: center
					position: relative
					input
						width: calc(100% - 40px)
						margin-right: 10px
						background-color: #f4f4f5
						border: 1px solid #ccc
						border-radius: 15px
						height: 30px
						font-size: 16px
						padding: 5px 10px 5px 30px
					.fa-search
						position: absolute
						font-size: 16px
						color: #aaa
						left: 10px
						top: calc(50% - 8px)
					.fa-sliders-h
						font-size: 20px
						color: #aaa
						cursor: pointer
			.account-details-list
				.account-details-item
					background-color: white
					border-radius: 10px
					height: 90px
					margin-bottom: 20px
					box-shadow: 0 0 10px #ddd
					.account-details-info, .account-details-balance
						vertical-align: top
					.account-details-info
						display: inline-flex
						width: 75%
						height: 100%
						padding: 10px 20px
						align-items: center
						.date
							width: 50px
							margin-right: 20px
						.source
							display: flex
							align-items: center
							min-width: 120px
							width: calc(50% - 50px)
							margin-right: 10px
							i
								font-size: 40px
								margin-right: 5px
						.inside
							i
								color: #33FFFF
						.outside
							i
								color: #FF44AA
						.source-account
							width: 50%
							display: flex
							flex-direction: column
							.source-account-top
								color: #ccc
					.account-details-balance
						display: inline-flex
						width: 25%
						height: 100%
						color: #999
						flex-direction: column
						padding: 10px 20px
						border-left: 1px solid #eee
						p
							margin: 5px 0
							.number
								color: #4d4d4d
			.pagination
				text-align: right
		.stock
			margin-top: 20px
			padding: 10px 20px
			position: relative
			.stock-title-bar
				display: flex
				justify-content: space-between
				.stock-title
					padding-left: 20px
				.filter-block
					width: 400px
					display: flex
					justify-content: space-between
					align-items: center
					position: relative
					button
						width: 180px
						margin-right: 10px
						height: 30px
						border-radius: 15px
						background-color: #f4f4f5
						font-size: 12px
						i
							font-size: 16px
							color: #aaa
					input
						width: calc(100% - 40px)
						margin-right: 10px
						background-color: #f4f4f5
						border: 1px solid #ccc
						border-radius: 15px
						height: 30px
						font-size: 16px
						padding: 5px 10px 5px 30px
					.fa-search
						position: absolute
						font-size: 16px
						color: #aaa
						left: 135px
						top: calc(50% - 8px)
					.fa-sliders-h
						font-size: 20px
						color: #aaa
						cursor: pointer
			.stock-slider
				width: 100%
				height: 250px
				position: absolute
				top: 70px
				.stock-slider-card
					height: 100%
					border-radius: 10px
					overflow: hidden
					.fund-price
						height: 190px
						background-image: url('../assets/card-theme-2.png')
						background-size: cover
						background-position: center center
						color: white
						position: relative
						.fund-name
							position: absolute
							font-size: 30px
							top: 50%
							left: 20px
						.price
							width: 70px
							text-align: center
							position: absolute
							top: 40%
							right: 5%
							.number
								font-size: 24px
								margin-top: 10px
					.purchase-date
						height: 80px
						padding: 10px 20px
						background-color: white
						p
							color: #4d4d4d
							margin: 5px
							span
								color: #999
								margin-right: 10px
			.stock-block
				width: 90%
				margin: 60px auto 0 auto
				.stock-content
					padding: 300px 10px 20px
					background-color: #fafafa
					border-radius: 5px
					.stock-content-left, .stock-content-right
						display: inline-block
						vertical-align: top
						padding: 20px
						min-height: 300px
					.stock-content-left
						width: 25%
						min-height: 300px
						position: relative
						.name
							margin: 10px 0
							display: inline-flex
							flex-direction: column
							.title
								font-size: 16px
								margin-bottom: 10px
							.content
								font-size: 20px
						.stock-status
							margin: 10px 0
							.purchasing, .orders
								vertical-align: top
							.purchasing
								width: 70px
								display: inline-block
								text-align: center
								background-color: #FF88C2
								color: white
								height: 30px
								line-height: 30px
								border-radius: 15px
							.orders
								display: inline-flex
								flex-direction: column
								font-size: 12px
								color: #ccc
						.detail-info
							position: absolute
							bottom: 10px
							width: 70px
							background-color: #fafafa
							border: 1px solid #ccc
							color: #ccc
							display: inline-block
							text-align: center
							height: 30px
							line-height: 30px
							border-radius: 15px
					.stock-content-right
						width: 75%
						border-left: 1px solid #ccc
						.purchase-info
							div
								display: inline-flex
								flex-direction: column
								margin: 10px 0
							.date
								width: 40%
							.type, .amount
								width: 20%
							.purchase-title
								font-size: 16px
								margin-bottom: 10px
							.purchase-content
								font-size: 20px
						.remarks
							.remarks-title, .remarks-content
								padding: 10px
								display: inline-block
							.remarks-title
								width: 60px
							.remarks-content
								width: calc(100% - 60px)
								background-color: #eee
								min-height: 100px


</style>
