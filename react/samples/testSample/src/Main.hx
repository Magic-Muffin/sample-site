import h2d.Bitmap;

class Main extends hxd.App {

	public static var inst: Main;
	var obj: h2d.Object;

	override function init() {
		obj = new h2d.Object(s2d);
		obj.x = Std.int(s2d.width / 2);
		obj.y = Std.int(s2d.height / 2);

		var tile = h2d.Tile.fromColor(0x552266,100,100);
    	tile = tile.center();

		new h2d.Bitmap(tile, obj);

		onResize();
	}

	override function onResize() {

		if(obj == null) return;

		obj.x = Std.int(s2d.width / 2);
    	obj.y = Std.int(s2d.height / 2);
	}

	override function update(dt: Float) {
		obj.rotation += 5*dt;
	}

	static function main() {
		hxd.Res.initEmbed();
		inst = new Main();
	}
}
