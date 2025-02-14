const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Behaviors.solid,
		C3.Plugins.Sprite,
		C3.Behaviors.EightDir,
		C3.Behaviors.Platform,
		C3.Behaviors.wrap,
		C3.Behaviors.Follow,
		C3.Behaviors.Pin,
		C3.Behaviors.Anchor,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.CreateObject,
		C3.Behaviors.Follow.Acts.FollowObject,
		C3.Plugins.System.Cnds.CompareBoolVar,
		C3.Behaviors.EightDir.Acts.SetVectorX,
		C3.Behaviors.EightDir.Exps.Acceleration,
		C3.Plugins.System.Acts.SetBoolVar,
		C3.Plugins.Sprite.Cnds.OnAnyAnimFinished,
		C3.Plugins.Sprite.Acts.StartAnim
	];
};
self.C3_JsPropNameTable = [
	{Sólido: 0},
	{FondoEnMosaico: 0},
	{"8Direcciones": 0},
	{Plataforma: 0},
	{Sprite: 0},
	{Sprite2: 0},
	{Rodear: 0},
	{Sprite3: 0},
	{Seguir: 0},
	{Sprite4: 0},
	{FondoEnMosaico2: 0},
	{Pegado: 0},
	{Ancla: 0},
	{Sprite5: 0},
	{FondoEnMosaico3: 0},
	{FondoEnMosaico4: 0},
	{avanzar: 0}
];

self.InstanceType = {
	FondoEnMosaico: class extends self.ITiledBackgroundInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	FondoEnMosaico2: class extends self.ITiledBackgroundInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	FondoEnMosaico3: class extends self.ITiledBackgroundInstance {},
	FondoEnMosaico4: class extends self.ITiledBackgroundInstance {}
}