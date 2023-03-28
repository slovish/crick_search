
var playerid = 1413;
var heading = "TEST";
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '196ae7da1a4msha4ac982e2d8aec7p10f36ajsnf75e7c9fa6b7',
		'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
    }
};

const getdata = (player_name) => {
    fetch('https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/search?plrN=' + player_name, options)
        .then(response => response.json())
        .then(response => {
            playerid = response.player[0].id
            p_name.innerHTML = response.player[0].name
            team_name.innerHTML = response.player[0].teamName
            console.log(p_name, team_name)
        }
        )
        .catch(err => console.error(err));
    return playerid
}

const getbatdata = (playerid, format_id) => {
    fetch('https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/' + playerid + '/batting', options)
        .then(response => response.json())
        .then(response => {
            heading.innerHTML = heading
            Matches.innerHTML = response.values[0].values[format_id]
            Innings.innerHTML = response.values[1].values[format_id]
            Runs.innerHTML = response.values[2].values[format_id]
            Balls.innerHTML = response.values[3].values[format_id]
            Highest.innerHTML = response.values[4].values[format_id]
            Average.innerHTML = response.values[5].values[format_id]
            Strike_Rate.innerHTML = response.values[6].values[format_id]
            Fours.innerHTML = response.values[8].values[format_id]
            Sixes.innerHTML = response.values[9].values[format_id]
            Fifties.innerHTML = response.values[11].values[format_id]
            Hundreds.innerHTML = response.values[12].values[format_id]

            console.log(Matches)
        })
        .catch(err => console.error(err));
}

const getbowldata = (playerid, format_id) => {
    fetch('https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/' + playerid + '/bowling', options)
        .then(response => response.json())
        .then(response => {
            Matches_b.innerHTML = response.values[0].values[format_id]
            Innings_b.innerHTML = response.values[1].values[format_id]
            Runs_given.innerHTML = response.values[3].values[format_id]
            Balls_bowled.innerHTML = response.values[2].values[format_id]
            Maidens.innerHTML = response.values[4].values[format_id]
            Wickets.innerHTML = response.values[5].values[format_id]
            Economy.innerHTML = response.values[7].values[format_id]
            Best_bowling.innerHTML = response.values[9].values[format_id]
            fivex.innerHTML = response.values[12].values[format_id]

            console.log(Matches)
        })
        .catch(err => console.error(err));
}

submit1.addEventListener("click", (e) => {
    e.preventDefault()
    heading = "TEST";
    console.log(search_field.value)
    getdata(search_field.value)
    getbatdata(playerid, 1)
    getbowldata(playerid, 1)
})

get_test_data.addEventListener("click", (e) => {
    e.preventDefault()
    heading = "TEST";
    getbatdata(playerid, 1)
    getbowldata(playerid, 1)
})

get_odi_data.addEventListener("click", (e) => {
    e.preventDefault()
    heading = "ODI";
    getbatdata(playerid, 2)
    getbowldata(playerid, 2)
})

get_t20_data.addEventListener("click", (e) => {
    e.preventDefault()
    heading = "T20";
    getbatdata(playerid, 3)
    getbowldata(playerid, 3)
})

get_ipl_data.addEventListener("click", (e) => {
    e.preventDefault()
    heading.innerHTML = "IPL";
    getbatdata(playerid, 4)
    getbowldata(playerid, 4)
})

getdata("Virat Kohli")
getbatdata(1413, 1)
getbowldata(1413, 1)

