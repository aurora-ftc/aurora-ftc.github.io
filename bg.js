const canvas = document.getElementById('aurora');
		const ctx = canvas.getContext('2d');
		let width, height;
		function resize(){ width=canvas.width=window.innerWidth; height=canvas.height=window.innerHeight; }
		window.addEventListener('resize', resize); resize();
		
		const layers=[];
		for(let i=0;i<5;i++){
			layers.push({y:Math.random()*height, amplitude:50+Math.random()*80, speed:0.002+Math.random()*0.003, phase:Math.random()*Math.PI*2, color:`hsla(${150+Math.random()*60},100%,40%,0.3)`});
		}
		
		function draw(){
		 ctx.clearRect(0,0,width,height);
		 for(const wave of layers){
		   ctx.beginPath();
		   for(let x=0;x<width;x+=2){
		     const y=wave.y+Math.sin(x*0.008+wave.phase)*wave.amplitude;
		     ctx.lineTo(x,y);
		   }
		   ctx.strokeStyle=wave.color;
		   ctx.lineWidth=3;
		   ctx.shadowBlur=15;
		   ctx.shadowColor=wave.color;
		   ctx.stroke();
		   wave.phase+=wave.speed;
		 }
		 requestAnimationFrame(draw);
		}
		draw();
