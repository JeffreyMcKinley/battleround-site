<head>



	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
	<script src="//cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/morris.js/0.5.1/morris.min.js"></script>
	<link href="https://cdnjs.cloudflare.com/ajax/libs/morris.js/0.5.1/morris.css" rel="stylesheet" />
	<link href="Styles/style.css" rel="stylesheet" type="text/css">
	<link href="Styles/stats.css" rel="stylesheet" type="text/css">


		<meta charset="utf-8">
			<title>Battlerounds Campaign Tracker</title>


</head>
<!-- HEAD END -->



<!-- BODY START   -->
				<body background="Images/warhammer40kbg.jpg">
					<div id="topnav"></div>


						<div class="boxContainer">
							<div>
								<div class = "boxHeader" id="grad">
									<h3 class = "boxTitle">Personal & Campaign Statistics</h3>
								</div>
									<div class="box" id="roundbox">
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet neque quis urna molestie euismod. Aliquam tristique egestas lacus, sed tincidunt velit pretium id. Suspendisse semper turpis quis diam malesuada porta. Sed rutrum, magna id condimentum tincidunt, velit purus malesuada massa, at rutrum ipsum nunc eu est. Fusce ac consequat turpis, eu lobortis lectus. In varius risus eget elementum mollis.</p>
										<br>

											<h3 class="hstats">Your Score Totals</h3>
													<div id="line-chart"></div>
										<br>
									</div>
							</div>
						</div>

							<div id="footer"></div>

						<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
						<script>$("#topnav").load("Includes/topnav.html");</script>
						<script src="JS/stats.js"></script>
						<script>$("#footer").load("Includes/footer.html");</script>

				</body>
