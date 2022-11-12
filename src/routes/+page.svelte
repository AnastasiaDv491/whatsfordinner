<script>
	import Auth from '/src/auth.svelte';
	import { goto } from '$app/navigation';
	// import css from ".static/theme.css"
</script>

<Auth let:user let:login let:logout>
	{#if user}
		<title>Home</title>
		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<!-- <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> -->
		<link
			href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800&display=swap"
			rel="stylesheet"
		/>
		<!-- <link rel="stylesheet" href="./static/home.css" /> -->

		<meta name="viewport" content="width=device-width, initial-scale=1" />

		<div class="titleContainer">
			<h1>Dashboard</h1>
			<h2>This week's menu</h2>
		</div>

		<div id="current_week_dishes_scrollable">
			<div id="card1" class="todaysDishCard dishcard">
				<img
					class="dishcardImage"
					src="https://cafedelites.com/wp-content/uploads/2019/01/Butter-Chicken-IMAGE-64.jpg"
					alt=""
				/>
				<div class="dishcardImageOverlay1">
					<img id="star" src="./star-svgrepo-com.svg" alt="" />
					<p class="dishcardImageOverlayText1">Your top pick</p>
				</div>
				<div>
					<p class="dishTitle">Butter Chicken</p>
					<p class="dishSubTitle">Monday</p>
				</div>
			</div>

			<div id="card2" class="dishcard">
				<img
					class="dishcardImage"
					src="https://realhousemoms.com/wp-content/uploads/Beef-Stroganoff-RECIPE-CARD.jpg"
					alt=""
				/>
				<div class="dishcardImageOverlay">
					<img id="star" src="./star-svgrepo-com.svg" alt="" />
					<p class="dishcardImageOverlayText">Your top pick</p>
				</div>
				<div>
					<p class="dishTitle">Beef stroganov</p>
					<p class="dishSubTitle">Tuesday</p>
				</div>
			</div>
			<div id="card3" class="dishcard">
				<img
					class="dishcardImage"
					src="https://pinchofyum.com/wp-content/uploads/Homemade-Tomato-Soup-Square.png"
					alt=""
				/>
				<p class="dishTitle">Tomato Soup</p>
				<p class="dishSubTitle">Wednesday</p>
			</div>

			<div id="card4" class="dishcard">
				<img
					class="dishcardImage"
					src="https://pinchofyum.com/wp-content/uploads/Homemade-Tomato-Soup-Square.png"
					alt=""
				/>
				<p class="dishTitle">Tomato Soup</p>
				<p class="dishSubTitle">Wednesday</p>
			</div>

			<div id="card5" class="dishcard">
				<img
					class="dishcardImage"
					src="https://pinchofyum.com/wp-content/uploads/Homemade-Tomato-Soup-Square.png"
					alt=""
				/>
				<p class="dishTitle">Tomato Soup</p>
				<p class="dishSubTitle">Wednesday</p>
			</div>
		</div>

		<div class="nextWeekBar">
			<h2>Next week's planning</h2>

			<div class="nextWeekContainer">
				<div class="nextWeekDayCard">
					<p class="nextWeekDayCardDay">Mon</p>
					<p class="nextWeekDayCardDate">31</p>
					<div class="presenceContainer">
						<div class="presenceCircle">SP</div>
						<div class="presenceCircle" />
						<div class="presenceCircle" />
						<div class="presenceCircle" />
					</div>
				</div>
				<div class="nextWeekDayCard present">
					<p class="nextWeekDayCardDay">Tue</p>
					<p class="nextWeekDayCardDate">01</p>
					<div class="presenceContainer">
						<div class="presenceCircle" />
						<div class="presenceCircle">SP</div>
						<div class="presenceCircle" />
						<div class="presenceCircle" />
					</div>
				</div>
				<div class="nextWeekDayCard">
					<p class="nextWeekDayCardDay">Wed</p>
					<p class="nextWeekDayCardDate">02</p>
					<div class="presenceContainer">
						<div class="presenceCircle" />
						<img class="presenceCircle presenceCircleImage" src="img/image.jpg" alt="circle" />
						<div class="presenceCircle">SP</div>
						<div class="presenceCircle" />
					</div>
				</div>
				<div class="nextWeekDayCard">
					<p class="nextWeekDayCardDay">Thu</p>
					<p class="nextWeekDayCardDate">03</p>
					<div class="presenceContainer">
						<div class="presenceCircle" />
						<div class="presenceCircle" />
						<div class="presenceCircle" />
						<div class="presenceCircle">SP</div>
					</div>
				</div>
				<div class="nextWeekDayCard">
					<p class="nextWeekDayCardDay">Fri</p>
					<p class="nextWeekDayCardDate">04</p>
					<div class="presenceContainer">
						<div class="presenceCircle" />
						<div class="presenceCircle" />
						<div class="presenceCircle" />
						<div class="presenceCircle" />
					</div>
				</div>
				<div class="nextWeekDayCard">
					<p class="nextWeekDayCardDay">Sat</p>
					<p class="nextWeekDayCardDate">05</p>
				</div>
				<div class="nextWeekDayCard">
					<p class="nextWeekDayCardDay">Sun</p>
					<p class="nextWeekDayCardDate">06</p>
				</div>
			</div>
		</div>

		<div class="pickDinnerContainer">
			<h2>Pick your dinner</h2>
			<div class="yourPicksContainer">
				<div class="yourPicksCard">
					<div class="yourPicksImgContainer">
						<img
							class="yourPicksImg"
							src="https://images.immediate.co.uk/production/volatile/sites/30/2021/03/French-fries-b9e3e0c.jpg"
							alt=""
						/>
						<div class="yourPicksRank">1</div>
					</div>
					<p>Frietjes</p>
				</div>
				<div class="yourPicksCard">
					<div class="yourPicksImgContainer">
						<img
							class="yourPicksImg"
							src="https://gimmesomeoven.com/wp-content/uploads/2020/04/Easy-Meatball-Recipe-3-1.jpg"
							alt=""
						/>

						<div class="yourPicksRank">2</div>
					</div>
					<p>Balletjes in tomaten saus</p>
				</div>
				<div class="yourPicksCard">
					<div class="yourPicksImgContainer">
						<img
							class="yourPicksImg"
							src="https://www.wellplated.com/wp-content/uploads/2017/02/Easy-Roasted-Carrot-Soup.jpg"
							alt=""
						/>
						<div class="yourPicksRank">3</div>
					</div>

					<p>Carrot soup</p>
				</div>
				<div class="yourPicksCard">
					<div class="yourPicksImgContainer">
						<img
							class="yourPicksImg"
							src="https://gimmesomeoven.com/wp-content/uploads/2020/04/Easy-Meatball-Recipe-3-1.jpg"
							alt=""
						/>
						<div class="yourPicksRank">4</div>
					</div>

					<p>Frietjes</p>
				</div>
			</div>
		</div>
		<p>Singed In</p>
		<button on:click={logout}>Logout</button>

	{/if}
</Auth>
