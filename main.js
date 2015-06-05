tm.game.setup({
    title: "Blood Blockade Battlefront",
    startLabel: "game",
    width: 640,
    height: 640,
    background: "rgba(130, 0, 0, 1.0)",
});

tm.define("GameScene", {
    superClass: "Scene",

    text: "ブレングリード流血闘術",
//    text: "斗流血法",
//    text: "エスメラルダ流血凍道",

    tech1: "久遠棺",
    tech2: "封縛獄",

    init: function() {
        // 親クラスの初期化
        this.superInit();

        this.base = tm.display.CanvasElement().addChildTo(this);
        this.gs1 = tm.util.GridSystem(640, this.tech1.length);

        this.phase = 0;
        this.time = 0;
    },

    update: function() {
        //流派
        if (this.phase == 0) {
            var count = (this.time/4).floor();
            if (this.time%4 !== 0) {
                this.time++;
                return;
            }
            if (count > this.text.length) {
                this.phase++;
                this.time = 0;
                return;
            }

            var s = this.text.substring(count, count+1);

            var l = tm.display.Label(s, 2000)
                .addChildTo(this.base)
                .setFillStyle("black")
                .setPosition(450, 320);
            
            l.tweener.clear()
                .to({scaleX:0.35, scaleY:0.35}, 120, "easeInSine");

            if (count === this.text.length-1) {
                l.tweener.wait(500).fadeOut(100);
            }
            l.tweener.call(function(){l.remove()}.bind(l));
            this.time++;
        }

        //技名１
        if (this.phase == 1) {
            var count = (this.time/5).floor();
        }
    }
});
