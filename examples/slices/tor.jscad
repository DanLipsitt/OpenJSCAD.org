// -- Tor (multi-color)
//    by Eduard Bespalov

function main(params) {
	var sqrt3 = Math.sqrt(3) / 2;
	var radius = 10;

	var hex = CSG.Polygon.createFromPoints([
			[radius, 0, 0],
			[radius / 2, radius * sqrt3, 0],
			[-radius / 2, radius * sqrt3, 0],
			[-radius, 0, 0],
			[-radius / 2, -radius * sqrt3, 0],
			[radius / 2, -radius * sqrt3, 0]
	]);
	var angle = 5;
	return hex.solidFromSlices({
		numslices: 360 / angle,
		loop: true,
		callback: function(t, slice) {
			var c = hsl2rgb(t,1,0.5);
			return this.rotate(
					[0,20,0], [-1, 0, 0], angle * slice
				).setColor(c);
		}
	});
}
