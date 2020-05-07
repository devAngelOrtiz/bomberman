	var PCompra=false,
		banplayer2=false,
		numplayer=1,
		player2name='';
		player={x:32,		y:32,	alto:20,	ancho:25,	dir:0,	die:0,	lives:3,	puntuacion:0},
		player2={x:544,		y:416,	alto:20,	ancho:25,	dir:0,	die:0,	lives:3,	puntuacion:0};
	window.onload = function(){
		document.getElementById('score').style.display='none';
		document.getElementById('scoremul').style.display='none';
		document.getElementById('historial').style.display='none';
		var canvas = document.getElementById("miCanvas"),
			context = canvas.getContext("2d"),
			banmenu=true,
			possalida=new Array(),
			posenemigo=3+Math.floor(Math.random()*(4)),
			fondo = new Image(),
			p1=new Image(),
			p2=new Image(),
			starp=new Image(),
			endfail=new Image(),
			endfailmenu=new Image(),
			endwin=new Image(),
			endwinmenu=new Image(),
			banmulespera=false,
			mulespera=new Array();
			mulespera[0]=new Image();
			mulespera[1]=new Image();
			mulespera[2]=new Image();
			mulespera[3]=new Image();
			mulespera[4]=new Image();
			mulespera[5]=new Image();
			mulespera[6]=new Image();
			mulespera[7]=new Image();

		context.font= "30px sans-serif";
		fondo.src = "img/bloques.png";
		p1.src = "img/p1.png";
		p2.src = "img/p2.png";
		starp.src = "img/inicio.png"
		endfail.src= "img/gameover.png";
		endfailmenu.src= "img/gameovermenu.png";
		endwin.src = "img/final.png";
		endwinmenu.src = "img/finalmenu.png";
		mulespera[0].src = "img/esp1.png";
		mulespera[1].src = "img/esp2.png";
		mulespera[2].src = "img/esp3.png";
		mulespera[3].src = "img/esp4.png";
		mulespera[4].src = "img/esp5.png";
		mulespera[5].src = "img/esp6.png";
		mulespera[6].src = "img/esp7.png";
		mulespera[7].src = "img/esp8.png";
		starp.addEventListener('load',menu,false);
		//fondo.addEventListener('load',dibujaescenario,false);
		//p1.addEventListener('load',dibujaP1,false);
		

		var gameover=1,ancho=16,alto=32,
			actualFrame=0,
			actualFrameP2=0,
			filas = 15,columnas = 19,
			numTilesImagen = 8,tamTile = 32,
			escenario = [
				[ 	6,	6,	6,	6,	6,	6,	6,	6,	6,	6,	6,	6,	6,	6,	6,	6,	6,	6,	6],
				[ 	6,	7,	7,	7,	7,	7,	57,	7,	7,	7,	57,	7,	7,	7,	57,	7,	57,	7,	6],
				[ 	6,	7,	6,	57,	6,	7,	6,	57,	6,	57,	6,	7,	6,	7,	6,	57,	6,	57,	6],
				[ 	6,	57,	57,	7,	7,	7,	7,	7,	57,	57,	7,	7,	7,	57,	7,	7,	7,	7,	6],
				[ 	6,	7,	6,	7,	6,	7,	6,	57,	6,	7,	6,	7,	6,	7,	6,	57,	6,	7,	6],
				[ 	6,	7,	57,	7,	7,	7,	7,	57,	7,	57,	57,	57,	7,	57,	7,	7,	7,	57,	6],
				[ 	6,	7,	6,	7,	6,	57,	6,	7,	6,	7,	6,	7,	6,	7,	6,	57,	6,	7,	6],
				[ 	6,	7,	7,	57,	57,	7,	57,	7,	57,	7,	7,	57,	7,	57,	7,	7,	7,	57,	6],
				[ 	6,	57,	6,	7,	6,	57,	6,	57,	6,	57,	6,	7,	6,	7,	6,	7,	6,	7,	6],
				[ 	6,	7,	57,	7,	7,	7,	57,	57,	7,	7,	7,	57,	7,	57,	7,	57,	7,	7,	6],
				[ 	6,	7,	6,	7,	6,	7,	6,	7,	6,	57,	6,	7,	6,	7,	6,	57,	6,	57,	6],
				[ 	6,	57,	7,	57,	7,	7,	57,	7,	57,	7,	7,	57,	7,	7,	7,	7,	7,	7,	6],
				[ 	6,	7,	6,	7,	6,	7,	6,	7,	6,	7,	6,	7,	6,	57,	6,	7,	6,	57,	6],
				[ 	6,	57,	57,	57,	7,	7,	57,	57,	7,	57,	7,	57,	7,	57,	7,	7,	57,	57,	6],
				[ 	6,	6,	6,	6,	6,	6,	6,	6,	6,	6,	6,	6,	6,	6,	6,	6,	6,	6,	6]
			],
			paso=8,
			mapa=0;
			enemigos=new Array();
			enemigos[0]={x:32,	y:128,	alto:28,	ancho:28,	dir:4,	die:0};
			enemigos[1]={x:128,	y:416,	alto:28,	ancho:28,	dir:6,	die:0};
			enemigos[2]={x:224,	y:96,	alto:28,	ancho:28,	dir:4,	die:0};
			enemigos[3]={x:448,	y:416, 	alto:28,	ancho:28,	dir:6,	die:0};
			enemigos[4]={x:448,	y:96, 	alto:28,	ancho:28,	dir:6,	die:0};

		var res={	img:null, 	x:0, 	y:0,	margen:20},
			res2={	img:null, 	x:0, 	y:0,	margen:20},
			resene=new Array();
			resene[0]={	img:null, 	x:0, 	y:0,	margen:40};
			resene[1]={	img:null, 	x:0, 	y:0,	margen:20};
			resene[2]={	img:null, 	x:0, 	y:0,	margen:20};
			resene[3]={	img:null, 	x:0, 	y:0,	margen:20};
			resene[4]={	img:null, 	x:0, 	y:0,	margen:20};
		var audio=new Array();
			audio[0]=new Audio();//inicio
			audio[0].src="audio/a0.mp3";
			audio[0].loop = true;
			audio[1]=new Audio();//fondo
			audio[1].src="audio/a1.mp3";
			audio[1].loop = true;
			audio[2]=new Audio();//fin del juego 
			audio[2].src="audio/a2.mp3";
			audio[3]=new Audio();//gameover
			audio[3].src="audio/a3.mp3";
			audio[4]=new Audio();//bomba
			audio[4].src="audio/a4.wav";
			audio[5]=new Audio();//muerte
			audio[5].src="audio/a5.mp3";
		var iainterval,mulinterval,buscap2interval,bombainterval;

		//MULTIPLAYER
		function esperando(i)
		{
			context.drawImage(mulespera[i], 0, 0,canvas.width,canvas.height);
			if(i==7)
				i=-1;
			$.ajax({
				data:  null,
		    	url:   'multiplayer/numPlayer.php',
		        type:  'post',
		        success:  function (response) {
		        	//alert(response);
		    		if(response=='true')
		    			banplayer2=true;
		    	}
			});
			setTimeout(function()
				{
					if(!banplayer2)
						esperando(i+1);
					else
						iniciomul();
				},80);
		}

		function iniciomul()
		{
			getnameplayer((numplayer%2)+1);
			audio[0].pause();
			audio[3].pause();
			audio[2].pause();
			alert(audio[1].paused);
			PCompra=false;
			document.getElementById('scoremul').style.display='inline';
			setmapa(1);
			res={	img:null, 	x:0, 	y:0,	margen:20};
			res2={	img:null, 	x:0, 	y:0,	margen:20};
			actualFrame=0;
			gameover=0;
			if(numplayer==2)
			{
				player2={x:32,		y:32,	alto:20,	ancho:25,	dir:0,	die:0,	lives:2,	puntuacion:0};
				player={x:544,		y:416,	alto:20,	ancho:25,	dir:0,	die:0,	lives:2,	puntuacion:0};
			}
			else
			{
				player={x:32,		y:32,	alto:20,	ancho:25,	dir:0,	die:0,	lives:2,	puntuacion:0};
				player2={x:544,		y:416,	alto:20,	ancho:25,	dir:0,	die:0,	lives:2,	puntuacion:0};
			}
			buscap2interval=setInterval(BuscaP2,50);
			bombainterval=setInterval(getBomba,50);
			dibujaescenario();
			dibujascoreMul();
			dibujaPlayersMul(1);
			dibujaPlayersMul(2);
		}

		function dibujaPlayersMul(i)
		{
			if(!player2.die && i==2)
			{
				dib_res(res2);
				respalda(player2,res2,alto);
				context.drawImage(p2,ancho*actualFrameP2,alto*player2.dir,ancho,alto,player2.x,player2.y-alto,ancho*2,alto*2);
			}
			if(!player.die && i==1)
			{
				dib_res(res);
				respalda(player,res,alto);
				context.drawImage(p1,ancho*actualFrame,alto*player.dir,ancho,alto,player.x,player.y-alto,ancho*2,alto*2);
			}
		}

		function dibujascoreMul()
		{
			document.getElementById("p1").innerHTML=player.lives;
			document.getElementById("p2").innerHTML=player2.lives;
		}

		function getBomba()
		{
			var id=2;
			if(numplayer==2)
				id=1;
			var datos= {
				'id': id
			};
			$.ajax({
				data:  datos,
		    	url:   'multiplayer/obtenbom.php',
		        type:  'post',
		        success:  function (response) {
		        	if(response!='')
		        	{
			    		var res = response.split(",");
			    		dibujabomba(parseInt(res[0]),parseInt(res[1]),0);
			    	}
		    	}
			});
		}

		function getnameplayer(id)
		{
			//alert(id);
			var datos= {
				'id': id
			};
			$.ajax({
				data:  datos,
		    	url:   'multiplayer/getname.php',
		        type:  'post',
		        success:  function (response) {
		        	player2name=response;
		        	$('#lbl_p2').html(player2name+":");
		        }
			});
		}

		function BuscaP2()
		{
			var id=2;
			if(numplayer==2)
				id=1;
			var datos= {
				'id': id
			};
			$.ajax({
				data:  datos,
		    	url:   'multiplayer/obtenp2.php',
		        type:  'post',
		        success:  function (response) {
		        	//alert(response);
		    		var res = response.split(",");
		    		player2.x=parseInt(res[0]);
		    		player2.y=parseInt(res[1]);
		    		player2.dir=parseInt(res[2]);
		    		actualFrameP2=parseInt(res[3]);
		    		player2.die=parseInt(res[4]);
		    		player2.lives=parseInt(res[5]);
		    		if(!player2.die)
		    			dibujaPlayersMul(2);
		    		else
		    		{
		    			dibujascoreMul();
		    			dib_res(res2);
		    		}
		    		if(!player2.lives)
		    			finishgame(player2name);
		    	}
			});
		}

		function insertbom(x,y)
		{
			var datos= {
				'id': numplayer,
				'x' : x,
				'y' : y
			};
			$.ajax({
				data:  datos,
		    	url:   'multiplayer/insertbom.php',
		        type:  'post'
		    });
		}

		function insertPos()
		{
			var datos= {
				'id': numplayer,
				'posx' : player.x,
				'posy' : player.y,
				'frame' : actualFrame,
				'dir' : player.dir,
				'die' : player.die,
				'lives' : player.lives
			};
			$.ajax({
				data:  datos,
		    	url:   'multiplayer/insertpos.php',
		        type:  'post'
		    });
		}

		function insertP()
		{
			$.ajax({
				data:  null,
		    	url:   'multiplayer/insertplayer.php',
		        type:  'post',
		        success:  function (response) {
		        	//alert(response);
		        	numplayer=1;
		    		if(response=="2")
		    		{
		    			numplayer=2;
		    			banplayer2=true;
		    			iniciomul();
		    		}
		    		else
		    			esperando(0);

		        }
			});
		}

		function iniciarconexion()
		{
			$.ajax({
				data:  null,
		    	url:   'multiplayer/conexion.php',
		        type:  'post'
		    });
		}

		function deleteMul()
		{
			$.ajax({
				data:  null,
		    	url:   'multiplayer/delete.php',
		        type:  'post'
		    });
		}

		function menu()
		{
			audio[0].play();
			audio[1].pause();
			audio[2].pause();
			audio[3].pause();
			audio[4].pause();
			audio[5].pause();
			context.drawImage(starp, 0, 0,canvas.width,canvas.height);
		}
		function setmapa(i)
		{
			posenemigo=3+Math.floor(Math.random()*(4));
			if(i==0)
				escenario = [
					[ 	6,	6,	6,	6,	6,	6,	6,	6,	6,	6,	6,	6,	6,	6,	6,	6,	6,	6,	6],
					[ 	6,	7,	7,	7,	7,	7,	57,	7,	7,	7,	57,	7,	7,	7,	57,	7,	57,	7,	6],
					[ 	6,	7,	6,	57,	6,	7,	6,	57,	6,	57,	6,	7,	6,	7,	6,	57,	6,	57,	6],
					[ 	6,	57,	57,	7,	7,	7,	7,	7,	57,	57,	7,	7,	7,	57,	7,	7,	7,	7,	6],
					[ 	6,	7,	6,	7,	6,	7,	6,	57,	6,	7,	6,	7,	6,	7,	6,	57,	6,	7,	6],
					[ 	6,	7,	57,	7,	7,	7,	7,	57,	7,	57,	57,	57,	7,	57,	7,	7,	7,	57,	6],
					[ 	6,	7,	6,	7,	6,	57,	6,	7,	6,	7,	6,	7,	6,	7,	6,	57,	6,	7,	6],
					[ 	6,	7,	7,	57,	57,	7,	57,	7,	57,	7,	7,	57,	7,	57,	7,	7,	7,	57,	6],
					[ 	6,	57,	6,	7,	6,	57,	6,	57,	6,	57,	6,	7,	6,	7,	6,	7,	6,	7,	6],
					[ 	6,	7,	57,	7,	7,	7,	57,	57,	7,	7,	7,	57,	7,	57,	7,	57,	7,	7,	6],
					[ 	6,	7,	6,	7,	6,	7,	6,	7,	6,	57,	6,	7,	6,	7,	6,	57,	6,	57,	6],
					[ 	6,	57,	7,	57,	7,	7,	57,	7,	57,	7,	7,	57,	7,	7,	7,	7,	7,	7,	6],
					[ 	6,	7,	6,	7,	6,	7,	6,	7,	6,	7,	6,	7,	6,	57,	6,	7,	6,	7,	6],
					[ 	6,	57,	57,	57,	7,	7,	57,	57,	7,	57,	7,	57,	7,	57,	7,	7,	7,	7,	6],
					[ 	6,	6,	6,	6,	6,	6,	6,	6,	6,	6,	6,	6,	6,	6,	6,	6,	6,	6,	6]
				];
			if(i==1)
				escenario = [
					[ 	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1],
					[ 	1,	7,	7,	17,	17,	7,	17,	7,	7,	7,	17,	7,	7,	7,	17,	7,	17,	7,	1],
					[ 	1,	7,	1,	17,	1,	7,	1,	7,	1,	17,	1,	7,	1,	7,	1,	17,	1,	17,	1],
					[ 	1,	17,	17,	7,	17,	7,	17,	7,	17,	7,	7,	7,	7,	17,	7,	7,	7,	7,	1],
					[ 	1,	7,	1,	7,	1,	17,	1,	17,	1,	7,	1,	7,	1,	7,	1,	17,	1,	7,	1],
					[ 	1,	7,	17,	17,	7,	7,	17,	1,	7,	17,	7,	7,	17,	17,	7,	7,	7,	17,	1],
					[ 	1,	7,	1,	7,	1,	17,	1,	7,	1,	7,	1,	7,	1,	7,	1,	17,	1,	7,	1],
					[ 	1,	7,	7,	17,	17,	7,	17,	7,	17,	7,	7,	17,	7,	17,	7,	7,	7,	17,	1],
					[ 	1,	17,	1,	7,	1,	17,	1,	17,	1,	17,	1,	7,	1,	7,	1,	7,	1,	7,	1],
					[ 	1,	7,	17,	7,	7,	7,	17,	17,	7,	7,	7,	17,	7,	17,	7,	7,	7,	7,	1],
					[ 	1,	7,	1,	7,	1,	7,	1,	7,	1,	17,	1,	7,	1,	7,	1,	17,	1,	17,	1],
					[ 	1,	17,	7,	17,	7,	7,	17,	7,	17,	7,	7,	17,	7,	7,	7,	7,	17,	7,	1],
					[ 	1,	7,	1,	7,	1,	7,	1,	7,	1,	7,	1,	7,	1,	17,	1,	7,	1,	7,	1],
					[ 	1,	17,	17,	17,	7,	7,	17,	17,	7,	17,	7,	17,	7,	17,	7,	17,	7,	7,	1],
					[ 	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1]
				];
			if(i==2)
				escenario = [
					[ 	12,	12,	12,	12,	12,	12,	12,	12,	12,	12,	12,	12,	12,	12,	12,	12,	12,	12,	12],
					[ 	12,	7,	7,	7,	7,	7,	16,	7,	7,	7,	16,	7,	7,	7,	16,	7,	16,	7,	12],
					[ 	12,	7,	12,	16,	12,	7,	12,	16,	12,	16,	12,	7,	12,	7,	12,	16,	12,	16,	12],
					[ 	12,	16,	16,	7,	7,	16,	7,	7,	16,	16,	7,	7,	7,	16,	7,	7,	7,	7,	12],
					[ 	12,	7,	12,	7,	12,	7,	12,	16,	12,	7,	12,	7,	12,	7,	12,	16,	12,	7,	12],
					[ 	12,	7,	16,	16,	7,	7,	7,	16,	7,	16,	16,	16,	7,	16,	7,	7,	7,	16,	12],
					[ 	12,	7,	12,	7,	12,	7,	12,	7,	12,	7,	12,	7,	12,	7,	12,	16,	12,	7,	12],
					[ 	12,	7,	7,	7,	16,	7,	16,	7,	16,	7,	7,	16,	7,	16,	7,	7,	7,	16,	12],
					[ 	12,	16,	12,	7,	12,	7,	12,	16,	12,	16,	12,	7,	12,	7,	12,	7,	12,	7,	12],
					[ 	12,	7,	16,	7,	7,	7,	16,	16,	7,	7,	7,	16,	7,	16,	7,	16,	7,	7,	12],
					[ 	12,	7,	12,	7,	12,	7,	12,	7,	12,	16,	12,	7,	12,	7,	12,	16,	12,	16,	12],
					[ 	12,	16,	7,	16,	7,	7,	16,	7,	16,	7,	7,	16,	7,	7,	7,	7,	16,	7,	12],
					[ 	12,	7,	12,	7,	12,	7,	12,	7,	12,	7,	12,	7,	12,	16,	12,	7,	12,	7,	12],
					[ 	12,	16,	16,	16,	7,	7,	16,	16,	7,	16,	7,	16,	7,	16,	7,	16,	7,	7,	12],
					[ 	12,	12,	12,	12,	12,	12,	12,	12,	12,	12,	12,	12,	12,	12,	12,	12,	12,	12,	12]
				];
		}

		function iniciasalida()
		{
			possalida[0]=Math.floor(Math.random()*19);
			possalida[1]=Math.floor(Math.random()*15);
			//alert(possalida[0]+" "+possalida[1])
			if( escenario[ possalida[1] ][ possalida[0] ]==57 || escenario[  possalida[1] ][ possalida[0]  ]==17 || escenario[  possalida[1] ][ possalida[0]  ]==16  )
				return;
			iniciasalida();
		}

		function inicio()
		{
			setmapa(mapa);
			iniciasalida();
			player.x=player.y=32;
			PCompra=true;
			document.getElementById('score').style.display='inline'
			enemigos[0]={x:32,	y:128,	alto:31,	ancho:31,	dir:4,	die:0};
			enemigos[1]={x:128,	y:416,	alto:31,	ancho:31,	dir:6,	die:0};
			enemigos[2]={x:224,	y:96,	alto:31,	ancho:31,	dir:4,	die:0};
			enemigos[3]={x:448,	y:416, 	alto:31,	ancho:31,	dir:6,	die:0};
			enemigos[4]={x:448,	y:96, 	alto:31,	ancho:31,	dir:6,	die:0};
			res={	img:null, 	x:0, 	y:0,	margen:20};
			resene[0]={	img:null, 	x:0, 	y:0,	margen:40};
			resene[1]={	img:null, 	x:0, 	y:0,	margen:20};
			resene[2]={	img:null, 	x:0, 	y:0,	margen:20};
			resene[3]={	img:null, 	x:0, 	y:0,	margen:20};
			resene[4]={	img:null, 	x:0, 	y:0,	margen:20};
			actualFrame=0;
			gameover=0;
			dibujaescenario();
			dibujascore(true);
			dibujaP1();
			dibujaenemigos();
			if(mapa==0)
				iainterval=setInterval(i_a_enemigos,1000);
		}

		function failgame(vs)
		{
			numplayer=1;
			PCompra=false;
			audio[3].play();
			gameover=1;
			if(banplayer2)
			{
				clearInterval(buscap2interval);
				clearInterval(getBomba);
				banmulespera=false;
				context.drawImage(endfailmenu, 0, 0,canvas.width,canvas.height);
				player.puntuacion=0;
				deleteMul();
			}
			else
			{
				clearInterval(iainterval);
				context.drawImage(endfail, 0, 0,canvas.width,canvas.height);
			}
			guardapartida('Derrota',vs);
		}


		function finishgame(vs)
		{
			numplayer=1;
			PCompra=false;
			audio[2].play();
			gameover=1;
			if(banplayer2)
			{
				clearInterval(buscap2interval);
				clearInterval(getBomba);
				banmulespera=false;
				context.drawImage(endwinmenu, 0, 0,canvas.width,canvas.height);
				player.puntuacion=0;
				deleteMul();
			}
			else
			{
				clearInterval(iainterval);
				context.drawImage(endwin, 0, 0,canvas.width,canvas.height);
			}
			guardapartida('Victoria',vs);
		}

		function guardapartida(vic,vs)
		{
			document.getElementById('score').style.display='none';
			document.getElementById('scoremul').style.display='none';
			var datos= {
				'est' : vic,
				'pun' : player.puntuacion,
				'vs'  : vs
			};
			$.ajax({
				data:  datos,
		    	url:   'funciones/insert.php',
		        type:  'post'
		    });
		}

		function bomba()
		{
			var	x,y;
			if(player.dir==0 || player.dir==2)//abajo y derecha
			{
				x=((player.x+ player.ancho) / tamTile) | 0;
				y=((player.y+player.alto) / tamTile) | 0;
			}
			if(player.dir==1 || player.dir==3)//arriba e izquierda
			{
				x=(player.x / tamTile) | 0;
				y=(player.y / tamTile) | 0;
			}
			dibujabomba(x,y,0);
			if (banplayer2)
				insertbom(x,yn+1);
		}

		function resetpalyer()
		{
			if(!player.die)
			{
				dib_res(res);			
				player.die=1;
				player.lives=player.lives-1;
				player.x=32;
				player.y=32;
				if(numplayer==2)
				{
					player.x=544;
					player.y=416;
				}
				player.dir=0;
				actualFrame=0;
				insertPos();
				dibujascoreMul();
				if(player.lives==0)
				{
					audio[1].pause();
					audio[5].play();
					audio[4].play();
					setTimeout(function(){ if(banplayer2) failgame(player2name); else failgame("I.A");},400);
					return true;
				}
				else
					setTimeout(function(){	player.die=0;	if(banplayer2) { dibujaPlayersMul(1); insertPos();} else dibujaP1();}, 800);
				audio[1].pause();
				audio[5].play();
				setTimeout(function(){	audio[1].play(); },1000);
				return false;
			}
		}

		function destruccion(y,x)
		{
			if(!gameover)
			{
				if(y==possalida[1] && x==possalida[0] && !banplayer2)
				{
					escenario[y][x]=56;
					//alert(escenario[y][x]+"  "+y+" "+x);
				}
				else
					escenario[y][x]=7;
				var tile = escenario[y][x];
				var	tileRow = (tile / numTilesImagen) | 0;
				var	tileCol = (tile % numTilesImagen) | 0;	
				context.drawImage(fondo, (tileCol * tamTile), (tileRow * tamTile), tamTile,tamTile, (x * tamTile), (y * tamTile), tamTile, tamTile);
			}
		}

		function dibujabomba(x,y,bomba)
		{
			//alert(x+" "+y);
			if(!gameover)
			{
				switch(bomba)
				{
					case 0: case 1: case 2: case 3:
						if(bomba==2)
							escenario[y][x]=0;
						context.drawImage(fondo, 7*tamTile , 0 ,tamTile,tamTile, x*tamTile , y*tamTile ,tamTile,tamTile);
						context.drawImage(fondo, (3+bomba)*tamTile , 7*tamTile ,tamTile,tamTile, x*tamTile , y*tamTile ,tamTile,tamTile);
						setTimeout(function(){dibujabomba(x,y,bomba+1);},500);
					break;
					case 4:
						if(colisionexplocion(x,y))		return;//centro
						context.drawImage(fondo, 2*tamTile , 7*tamTile ,tamTile,tamTile, x*tamTile , y*tamTile ,tamTile,tamTile);
						setTimeout(function(){ destruccion(y,x);  },500);
						//alert(y+" "+x);
						//alert(escenario[y][x+1]);
						if(escenario[y][x+1]==7 || escenario[y][x+1]==57 || escenario[y][x+1]==17  || escenario[y][x+1]==16 )//derecha +1
						{
							if(escenario[y][x+1]==57 || escenario[y][x+1]==17  || escenario[y][x+1]==16 )
								player.puntuacion+=10;
							if(colisionexplocion(x+1,y))	
								return;
							context.drawImage(fondo, 2*tamTile , 7*tamTile ,tamTile,tamTile, (x+1)*tamTile , y*tamTile ,tamTile,tamTile);
							setTimeout(function(){destruccion(y,x+1); },500);
							if(escenario[y][x+1]==7 && (escenario[y][x+2]==7 || escenario[y][x+2]==57 || escenario[y][x+2]==17  || escenario[y][x+2]==16 ))//derecha +2
							{
								if(escenario[y][x+2]==57 || escenario[y][x+2]==17  || escenario[y][x+2]==16 )
									player.puntuacion+=10;
								if(colisionexplocion(x+2,y))	
									return;
								context.drawImage(fondo, 2*tamTile , 7*tamTile ,tamTile,tamTile, (x+2)*tamTile , y*tamTile ,tamTile,tamTile);
								setTimeout(function(){destruccion(y,x+2); },500);
							}
						}
						if(escenario[y][x-1]==7 || escenario[y][x-1]==57 || escenario[y][x-1]==17  || escenario[y][x-1]==16 )//izquierda+1
						{
							if(escenario[y][x-1]==57 || escenario[y][x-1]==17  || escenario[y][x-1]==16 )
								player.puntuacion+=10;
							if(colisionexplocion(x-1,y))		
								return;
							context.drawImage(fondo, 2*tamTile , 7*tamTile ,tamTile,tamTile, (x-1)*tamTile , y*tamTile ,tamTile,tamTile);
							setTimeout(function(){destruccion(y,x-1); },500);
							if( escenario[y][x-1]==7 && (escenario[y][x-2]==7 || escenario[y][x-2]==57 || escenario[y][x-2]==17  || escenario[y][x-2]==16 ))//izquierda+2
							{
								if(escenario[y][x-2]==57 || escenario[y][x-2]==17  || escenario[y][x-2]==16 )
									player.puntuacion+=10;
								if(colisionexplocion(x-2,y))	
									return;
								context.drawImage(fondo, 2*tamTile , 7*tamTile ,tamTile,tamTile, (x-2)*tamTile , y*tamTile ,tamTile,tamTile);
								setTimeout(function(){destruccion(y,x-2);  },500);
							}
						}
						if(escenario[y+1][x]==7 || escenario[y+1][x]==57 || escenario[y+1][x]==17  || escenario[y+1][x]==16 )//abajo+1
						{
							if(escenario[y+1][x]==57 || escenario[y+1][x]==17  || escenario[y+1][x]==16 )
								player.puntuacion+=10;
							if(colisionexplocion(x,y+1))	
								return;
							context.drawImage(fondo, 2*tamTile , 7*tamTile ,tamTile,tamTile, x*tamTile , (y+1)*tamTile ,tamTile,tamTile);
							setTimeout(function(){destruccion(y+1,x); },500);
							if(escenario[y+1][x]==7 && (escenario[y+2][x]==7 || escenario[y+2][x]==57 || escenario[y+2][x]==17  || escenario[y+2][x]==16 ))//abajo+2
							{
								if(escenario[y+2][x]==57 || escenario[y+2][x]==17  || escenario[y+2][x]==16 )
									player.puntuacion+=10;
								if(colisionexplocion(x,y+2))	
									return;
								context.drawImage(fondo, 2*tamTile , 7*tamTile ,tamTile,tamTile, x*tamTile , (y+2)*tamTile ,tamTile,tamTile);
								setTimeout(function(){destruccion(y+2,x); },500);
							}
						}
						if(escenario[y-1][x]==7 || escenario[y-1][x]==57 || escenario[y-1][x]==17  || escenario[y-1][x]==16 )//arriba+1
						{
							if(escenario[y-1][x]==57 || escenario[y-1][x]==17  || escenario[y-1][x]==16 )
								player.puntuacion+=10;
							if(colisionexplocion(x,y-1))	
								return;
							context.drawImage(fondo, 2*tamTile , 7*tamTile ,tamTile,tamTile, x*tamTile , (y-1)*tamTile ,tamTile,tamTile);
							setTimeout(function(){destruccion(y-1,x) ; },500);
							if( escenario[y-1][x]==7 && (escenario[y-2][x]==7 || escenario[y-2][x]==57 || escenario[y-2][x]==17  || escenario[y-2][x]==16 ))//arriba+2
							{
								if(escenario[y-2][x]==57 || escenario[y-2][x]==17  || escenario[y-2][x]==16 )
									player.puntuacion+=10;
								if(colisionexplocion(x,y-2))	
									return;
								context.drawImage(fondo, 2*tamTile , 7*tamTile ,tamTile,tamTile, x*tamTile , (y-2)*tamTile ,tamTile,tamTile);
								setTimeout(function(){destruccion(y-2,x); },500);
							}
						}
						audio[4].play();
						dibujascore(null);
					break;
				}
			}
		}

		function dibujaescenario ()
		{
			context.clearRect(0,0,canvas.width,canvas.height);
			for(var r = 0; r < filas; r++)
			{
				for(var c = 0; c < columnas; c++)
				{
					var tile = escenario[r][c];
					var	tileRow = (tile / numTilesImagen) | 0;
					var	tileCol = (tile % numTilesImagen) | 0;	
					context.drawImage(fondo, (tileCol * tamTile), (tileRow * tamTile), tamTile,tamTile, (c * tamTile), (r * tamTile), tamTile, tamTile);
				}
			}
		}

		function dibujascore(ini)
		{
			document.getElementById("vidas").innerHTML=player.lives;
			document.getElementById("puntuacion").innerHTML=player.puntuacion;
		}

		function dibujaP1()
		{
			if(!player.die)
			{
				dib_res(res);
				for(var i=0;i<enemigos.length;i++)
					if(!enemigos[i].die)
					 	if(colisionplayer(enemigos[i]))
					 		return;
				respalda(player,res,alto);
				context.drawImage(p1,ancho*actualFrame,alto*player.dir,ancho,alto,player.x,player.y-alto,ancho*2,alto*2);
			}
		}

		function dibujaenemigos()
		{
			for(var i=0;i<enemigos.length;i++)
			{
				if(!enemigos[i].die)
				{
					dib_res(resene[i]);
					respalda(enemigos[i],resene[i],0);
					context.drawImage(fondo,tamTile*enemigos[i].dir,tamTile*posenemigo,enemigos[i].ancho,enemigos[i].alto,enemigos[i].x,enemigos[i].y,enemigos[i].ancho,enemigos[i].alto);
					if(colisionplayer(enemigos[i]))
					 		return;
				}
				else
					if(enemigos[i].die==1)
					{
						enemigos[i].die++;
						context.drawImage(fondo,tamTile*7,0,tamTile,tamTile,enemigos[i].x,enemigos[i].y,tamTile,tamTile);
					}
			}
		}

		function respalda(obj,res,alto)
		{
			res.img=context.getImageData(obj.x, obj.y-alto, tamTile, tamTile+alto);
			res.x=obj.x;
			res.y=obj.y-alto;
		}
		function dib_res(obj)
		{
			if(obj.img!=null)
				context.putImageData(obj.img, obj.x, obj.y);
		}

		function intersec(obj,x,y)
		{
			if( (escenario[((obj.y+y) / tamTile) | 0][((obj.x+x) / tamTile) | 0])!=7)
				return false;
			if( (escenario[((obj.y+y+obj.alto) / tamTile) | 0][((obj.x+x+obj.ancho) / tamTile) | 0])!=7)
				return false;
			if( (escenario[((obj.y+y) / tamTile) | 0][((obj.x+x+obj.ancho) / tamTile) | 0])!=7)
				return false;
			if( (escenario[((obj.y+y+obj.alto) / tamTile) | 0][((obj.x+x) / tamTile) | 0])!=7)
				return false;
			return true;
		}

		function colisionexplocion(x,y)
		{
			var xp=(player.x / tamTile) | 0,
				yp=(player.y / tamTile) | 0,
				xpn=((player.x + player.ancho)/ tamTile) | 0,
				ypn=((player.y + player.alto)/ tamTile) | 0;
			if( (xp==x && yp==y) )
				if(resetpalyer())
					return true;
			if( (xpn==x && ypn==y) )
					if(resetpalyer())
						return true;
			if(!banplayer2)
				for(var i=0;i<enemigos.length;i++)
				{
					if(enemigos[i].die)
						continue;
					var xp=(enemigos[i].x / tamTile) | 0,
						yp=(enemigos[i].y / tamTile) | 0,
						xpn=((enemigos[i].x + enemigos[i].ancho)/ tamTile) | 0,
						ypn=((enemigos[i].y + enemigos[i].alto)/ tamTile) | 0;
					if(xp==x && yp==y) 
					{
						player.puntuacion+=20;
						enemigos[i].die=1;
					}
					else
						if(xpn==x && ypn==y) 
						{
							player.puntuacion+=20;
							enemigos[i].die=1;
						}
				}
			return false;
		}

		function colisionplayer(enemigo)
		{
			if(banplayer2)
				return false;
			var ex=enemigo.x,ey=enemigo.y,eal=enemigo.alto, ean=enemigo.ancho,
				px=player.x,py=player.y,pal=player.alto, pan=player.ancho;
			if(ex<=px && ex+ean>=px && ey<=py && ey+eal>=py)//sup izq
			{
				resetpalyer();
				return true;
			}
			if(ex<=px+pan && ex+ean>=px+pan && ey<=py+pan && ey+eal>=py+pan)//inf der
			{
				resetpalyer();
				return true;
			}
			if(ex<=px+pan && ex+ean>=px+pan && ey<=py && ey+eal>=py)//sup der
			{
				resetpalyer();
				return true;
			}
			if(ex<=px && ex+ean>=px && ey<=py+pan && ey+eal>=py+pan)//inf izq
			{
				resetpalyer();
				return true;
			}
			return false
		}
		function colisionplayerrespaldo(enemigos)
		{
			var filp=(player.y/tamTile)|0,	
				colp=(player.x/tamTile)|0,	
				file=(enemigos.y/tamTile)|0,	
				cole=(enemigos.x/tamTile)|0;
			var filpn=((player.y+player.alto)/tamTile)|0,	
				colpn=((player.x+player.ancho)/tamTile)|0,	
				filen=((enemigos.y+enemigos.alto)/tamTile)|0,	
				colen=((enemigos.x+enemigos.ancho)/tamTile)|0;
			if( (filp==file && colp==cole) || (filpn==file && colpn==cole) || (filpn==file && colp==cole) || (filp==file && colpn==cole))
			{
				resetpalyer();
				return true;
			}
			else
				if( (filpn==filen && colpn==cole) || (filpn==filen && colp==cole) || (filp==filen && colpn==cole))
				{
					resetpalyer();
					return true;
				}
				else
					if( (filpn==filen && colpn==colen) || (filpn==filen && colp==colen) || (filp==filen && colpn==colen))
					{
						resetpalyer();
						return true;
					}
			return false;
		}

		function ganaste(obj,x,y)
		{
			if( (escenario[((obj.y+y) / tamTile) | 0][((obj.x+x) / tamTile) | 0])==56)
				return true;
			if( (escenario[((obj.y+y+obj.alto) / tamTile) | 0][((obj.x+x+obj.ancho) / tamTile) | 0])==56)
				return true;
			if( (escenario[((obj.y+y) / tamTile) | 0][((obj.x+x+obj.ancho) / tamTile) | 0])==56)
				return true;
			if( (escenario[((obj.y+y+obj.alto) / tamTile) | 0][((obj.x+x) / tamTile) | 0])==56)
				return true;
			return false;
		}

		window.onkeydown=function(e)
		{
			var tecla=e.keyCode;

			//alert(tecla);

			if(!gameover && !player.die)
			{
				if (tecla == 39)//derecha
					if(ganaste(player,paso,0))
					{
						if(mapa==2)
							audio[1].pause();
						if(banplayer2)
							finishgame(player2name);
						else
							if(mapa==2)
								finishgame("I.A");
							else
							{
								mapa++;
								inicio();
							}
						return;
					}
					else
						if(player.dir==2 && intersec(player,paso,0))
						{
							actualFrame=(actualFrame+1)%9;
							player.x=player.x+paso;
						}
						else
						{
							actualFrame=0;
							player.dir=2;
						}
				if (tecla == 40)//abajo
					if(ganaste(player,0,paso))
					{
						if(mapa==2)
							audio[1].pause();
						if(banplayer2)
							finishgame(player2name);
						else
							if(mapa==2)
								finishgame("I.A");
							else
							{
								mapa++;
								inicio();
							}
						return;
					}
					else
						if(player.dir==0 && intersec(player,0,paso))
						{
							actualFrame=(actualFrame+1)%9;
							player.y=player.y+paso;
						}
						else
						{
							actualFrame=0;
							player.dir=0;
						}
				if (tecla == 38)//arriba
					if(ganaste(player,0,-paso))
					{
						if(mapa==2)
							audio[1].pause();
						if(banplayer2)
							finishgame(player2name);
						else
							if(mapa==2)
								finishgame("I.A");
							else
							{
								mapa++;
								inicio();
							}
						return;
					}
					else
						if(player.dir==1 && intersec(player,0,-paso))
						{
							actualFrame=(actualFrame+1)%9;
							player.y=player.y-paso;
						}
						else
						{
							actualFrame=0;
							player.dir=1;
						}
				if (tecla == 37)//izquierda
					if(ganaste(player,-paso,0))
					{
						if(mapa==2)
							audio[1].pause();
						if(banplayer2)
							finishgame(player2name);
						else
							if(mapa==2)
								finishgame("I.A");
							else
							{
								mapa++;
								inicio();
							}
						return;
					}
					else
						if(player.dir==3 && intersec(player,-paso,0))
						{
							actualFrame=(actualFrame+1)%9;
							player.x=player.x-paso;
						}
						else
						{
							actualFrame=0;
							player.dir=3;
						}
				if(banplayer2)
					insertPos();
				if (tecla == 65)//A
					bomba();
				dibujaP1();
			}
			if (tecla== 16)//shift
				if(banmenu && gameover)
				{
					banmulespera=true;
					banmenu=false;
					iniciarconexion();
					insertP();
				}
				else
					if(gameover && !banmulespera)
					{
						audio[0].pause();
						audio[3].pause();
						audio[2].pause();
						audio[1].play();
						banmenu=true;
						banplayer2=false;
						menu();
					}
			if (tecla== 13)//enter
				if(gameover && !banplayer2)
				{
					banplayer2=false;
					banmenu=false;
					audio[0].pause();
					audio[3].pause();
					audio[2].pause();
					audio[1].play();
					mapa=0;
					player={x:32,		y:32,	alto:20,	ancho:25,	dir:0,	die:0,	lives:3,	puntuacion:0};
					inicio();
				}
		}

		function i_a_enemigos()
		{
			//alert("ia inicio");
			for(var i=0;i< enemigos.length;i++)
				if(!enemigos[i].die)
				{
					if(enemigos[i].dir==0)
						if(intersec(enemigos[i],0,-paso))
						{
							enemigos[i].y=enemigos[i].y-paso;
							continue
						}
					if(enemigos[i].dir==2)
						if(intersec(enemigos[i],-paso,0))
						{
							enemigos[i].x=enemigos[i].x-paso;
							continue
						}
					if(enemigos[i].dir==4)
						if(intersec(enemigos[i],0,paso))
						{
							enemigos[i].y=enemigos[i].y+paso;
							continue
						}
					if(enemigos[i].dir==6)
						if(intersec(enemigos[i],paso,0))
						{
							enemigos[i].x=enemigos[i].x+paso;
							continue
						}
					enemigos[i].dir=(enemigos[i].dir+2)%8
				}
			dibujaenemigos();
		}
	};