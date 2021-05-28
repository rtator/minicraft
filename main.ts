let InInventory = false
let HighlightedItem = 0
let DraggingItem: number = null
let PlayerDir = 0
let SavedPlayerDir = 0
let Breaking: Tile = null
let UsingStation: number = -1
let DraggingAmount: number = 0 
function DrawString(Str: string, x: number, y: number, img: Image) {
    let NewX = x
    let NewY = y
    for (let index = 0;index < Str.length;index++) {
        DrawLetter(Str.charAt(index).toLowerCase(), NewX, NewY, img)
        NewX += 7
        if (NewX >= 160) {
            NewY += 8
            NewX = x
        }
    }
}
function DrawLetter(Letter: string, x: number, y: number, img: Image) {
    let BG = img
    if (Letter == "a") {
        BG.drawImage(Letters.A, x, y)
    } else if (Letter == "b") {
        BG.drawImage(Letters.B, x, y)
    } else if (Letter == "c") {
        BG.drawImage(Letters.C, x, y)
    } else if (Letter == "d") {
        BG.drawImage(Letters.D, x, y)
    } else if (Letter == "e") {
        BG.drawImage(Letters.E, x, y)
    } else if (Letter == "f") {
        BG.drawImage(Letters.F, x, y)
    } else if (Letter == "g") {
        BG.drawImage(Letters.G, x, y)
    } else if (Letter == "h") {
        BG.drawImage(Letters.H, x, y)
    } else if (Letter == "i") {
        BG.drawImage(Letters.I, x, y)
    } else if (Letter == "j") {
        BG.drawImage(Letters.J, x, y)
    } else if (Letter == "k") {
        BG.drawImage(Letters.K, x, y)
    } else if (Letter == "l") {
        BG.drawImage(Letters.L, x, y)
    } else if (Letter == "m") {
        BG.drawImage(Letters.M, x, y)
    } else if (Letter == "n") {
        BG.drawImage(Letters.N, x, y)
    } else if (Letter == "o") {
        BG.drawImage(Letters.O, x, y)
    } else if (Letter == "p") {
        BG.drawImage(Letters.P, x, y)
    } else if (Letter == "q") {
        BG.drawImage(Letters.Q, x, y)
    } else if (Letter == "r") {
        BG.drawImage(Letters.R, x, y)
    } else if (Letter == "s") {
        BG.drawImage(Letters.S, x, y)
    } else if (Letter == "t") {
        BG.drawImage(Letters.T, x, y)
    } else if (Letter == "u") {
        BG.drawImage(Letters.U, x, y)
    } else if (Letter == "v") {
        BG.drawImage(Letters.V, x, y)
    } else if (Letter == "w") {
        BG.drawImage(Letters.W, x, y)
    } else if (Letter == "x") {
        BG.drawImage(Letters.X, x, y)
    } else if (Letter == "y") {
        BG.drawImage(Letters.Y, x, y)
    } else if (Letter == "z") {
        BG.drawImage(Letters.Z, x, y)
    } else if (Letter == "0") {
        BG.drawImage(Letters.num0, x, y)
    } else if (Letter == "1") {
        BG.drawImage(Letters.num1, x, y)
    } else if (Letter == "2") {
        BG.drawImage(Letters.num2, x, y)
    } else if (Letter == "3") {
        BG.drawImage(Letters.num3, x, y)
    } else if (Letter == "4") {
        BG.drawImage(Letters.num4, x, y)
    } else if (Letter == "5") {
        BG.drawImage(Letters.num5, x, y)
    } else if (Letter == "6") {
        BG.drawImage(Letters.num6, x, y)
    } else if (Letter == "7") {
        BG.drawImage(Letters.num7, x, y)
    } else if (Letter == "8") {
        BG.drawImage(Letters.num8, x, y)
    } else if (Letter == "9") {
        BG.drawImage(Letters.num9, x, y)
    } else if (Letter == ".") {
        BG.drawImage(Letters.Point, x, y)
    }
}
namespace Letters {
    export const A = (img`
        . . . . . . . .
        . . 1 1 1 . . .
        . 1 . . . 1 . .
        . 1 . . . 1 . .
        . 1 1 1 1 1 . .
        . 1 . . . 1 . .
        . 1 . . . 1 . .
        . 1 . . . 1 . .
    `)
    export const B = (img`
        . . . . . . . .
        . 1 1 1 1 . . .
        . 1 . . . 1 . .
        . 1 . . . 1 . .
        . 1 1 1 1 . . .
        . 1 . . . 1 . .
        . 1 . . . 1 . .
        . 1 1 1 1 . . .
    `)
    export const C = (img`
        . . . . . . . .
        . . 1 1 1 . . .
        . 1 . . . 1 . .
        . 1 . . . . . .
        . 1 . . . . . .
        . 1 . . . . . .
        . 1 . . . 1 . .
        . . 1 1 1 . . .
    `)
    export const D = (img`
        . . . . . . . .
        . 1 1 1 1 . . .
        . 1 . . . 1 . .
        . 1 . . . 1 . .
        . 1 . . . 1 . .
        . 1 . . . 1 . .
        . 1 . . . 1 . .
        . 1 1 1 1 . . .
    `)
    export const E = (img`
        . . . . . . . .
        . 1 1 1 1 1 . .
        . 1 . . . . . .
        . 1 . . . . . .
        . 1 1 1 1 . . .
        . 1 . . . . . .
        . 1 . . . . . .
        . 1 1 1 1 1 . .
    `)
    export const F = (img`
        . . . . . . . .
        . 1 1 1 1 1 . .
        . 1 . . . . . .
        . 1 1 1 . . . .
        . 1 . . . . . .
        . 1 . . . . . .
        . 1 . . . . . .
        . 1 . . . . . .
    `)
    export const G = (img`
        . . . . . . . .
        . . 1 1 1 . . .
        . 1 . . . 1 . .
        . 1 . . . . . .
        . 1 . . . . . .
        . 1 . 1 1 1 . .
        . 1 . . . 1 . .
        . . 1 1 1 . . .
    `)
    export const H = (img`
        . . . . . . . .
        . 1 . . . 1 . .
        . 1 . . . 1 . .
        . 1 . . . 1 . .
        . 1 1 1 1 1 . .
        . 1 . . . 1 . .
        . 1 . . . 1 . .
        . 1 . . . 1 . .
    `)
    export const I = (img`
        . . . . . . . .
        . 1 1 1 1 1 . .
        . . . 1 . . . .
        . . . 1 . . . .
        . . . 1 . . . .
        . . . 1 . . . .
        . . . 1 . . . .
        . 1 1 1 1 1 . .
    `)
    export const J = (img`
        . . . . . . . .
        . . . . . 1 . .
        . . . . . 1 . .
        . . . . . 1 . .
        . . . . . 1 . .
        . 1 . . . 1 . .
        . 1 . . . 1 . .
        . . 1 1 1 . . .
    `)
    export const K = (img`
        . . . . . . . .
        . 1 . . . 1 . .
        . 1 . . 1 . . .
        . 1 . 1 . . . .
        . 1 1 . . . . .
        . 1 . 1 . . . .
        . 1 . . 1 . . .
        . 1 . . . 1 . .
    `)
    export const L = (img`
        . . . . . . . .
        . 1 . . . . . .
        . 1 . . . . . .
        . 1 . . . . . .
        . 1 . . . . . .
        . 1 . . . . . .
        . 1 . . . . . .
        . 1 1 1 1 1 . .
    `)
    export const M = (img`
        . . . . . . . .
        . 1 . . . 1 . .
        . 1 1 . 1 1 . .
        . 1 . 1 . 1 . .
        . 1 . . . 1 . .
        . 1 . . . 1 . .
        . 1 . . . 1 . .
        . 1 . . . 1 . .
    `)
    export const N = (img`
        . . . . . . . .
        . 1 . . . 1 . .
        . 1 1 . . 1 . .
        . 1 . 1 . 1 . .
        . 1 . . 1 1 . .
        . 1 . . . 1 . .
        . 1 . . . 1 . .
        . 1 . . . 1 . .
    `)
    export const O = (img`
        . . . . . . . .
        . . 1 1 1 . . .
        . 1 . . . 1 . .
        . 1 . . . 1 . .
        . 1 . . . 1 . .
        . 1 . . . 1 . .
        . 1 . . . 1 . .
        . . 1 1 1 . . .
    `)
    export const P = (img`
        . . . . . . . .
        . 1 1 1 1 . . .
        . 1 . . . 1 . .
        . 1 . . . 1 . .
        . 1 1 1 1 . . .
        . 1 . . . . . .
        . 1 . . . . . .
        . 1 . . . . . .
    `)
    export const Q = (img`
        . . . . . . . .
        . . 1 1 1 . . .
        . 1 . . . 1 . .
        . 1 . . . 1 . .
        . 1 . . . 1 . .
        . 1 . 1 . 1 . .
        . 1 . . 1 . . .
        . . 1 1 . 1 . .
    `)
    export const R = (img`
        . . . . . . . .
        . 1 1 1 1 . . .
        . 1 . . . 1 . .
        . 1 . . . 1 . .
        . 1 1 1 1 . . .
        . 1 . 1 . . . .
        . 1 . . 1 . . .
        . 1 . . . 1 . .
    `)
    export const S = (img`
        . . . . . . . .
        . . 1 1 1 . . .
        . 1 . . . 1 . .
        . 1 . . . . . .
        . . 1 1 1 . . .
        . . . . . 1 . .
        . 1 . . . 1 . .
        . . 1 1 1 . . .
    `)
    export const T = (img`
        . . . . . . . .
        . 1 1 1 1 1 . .
        . . . 1 . . . .
        . . . 1 . . . .
        . . . 1 . . . .
        . . . 1 . . . .
        . . . 1 . . . .
        . . . 1 . . . .
    `)
    export const U = (img`
        . . . . . . . .
        . 1 . . . 1 . .
        . 1 . . . 1 . .
        . 1 . . . 1 . .
        . 1 . . . 1 . .
        . 1 . . . 1 . .
        . 1 . . . 1 . .
        . . 1 1 1 . . .
    `)
    export const V = (img`
        . . . . . . . .
        . 1 . . . 1 . .
        . 1 . . . 1 . .
        . 1 . . . 1 . .
        . . 1 . 1 . . .
        . . 1 . 1 . . .
        . . 1 . 1 . . .
        . . . 1 . . . .
    `)
    export const W = (img`
        . . . . . . . .
        . 1 . . . 1 . .
        . 1 . . . 1 . .
        . 1 . . . 1 . .
        . 1 . . . 1 . .
        . 1 . 1 . 1 . .
        . 1 1 . 1 1 . .
        . 1 . . . 1 . .
    `)
    export const X = (img`
        . . . . . . . .
        . 1 . . . 1 . .
        . 1 . . . 1 . .
        . . 1 . 1 . . .
        . . . 1 . . . .
        . . 1 . 1 . . .
        . 1 . . . 1 . .
        . 1 . . . 1 . .
    `)
    export const Y = (img`
        . . . . . . . .
        . 1 . . . 1 . .
        . . 1 . 1 . . .
        . . . 1 . . . .
        . . . 1 . . . .
        . . . 1 . . . .
        . . . 1 . . . .
        . . . 1 . . . .
    `)
    export const Z = (img`
        . . . . . . . .
        . 1 1 1 1 1 . .
        . . . . . 1 . .
        . . . . 1 . . .
        . . . 1 . . . .
        . . 1 . . . . .
        . 1 . . . . . .
        . 1 1 1 1 1 . .
    `)
    export const num0 = (img`
        . . . . . . . .
        . . 1 1 1 . . .
        . 1 . . . 1 . .
        . 1 . . 1 1 . .
        . 1 . 1 . 1 . .
        . 1 1 . . 1 . .
        . 1 . . . 1 . .
        . . 1 1 1 . . .
    `)
    export const num1 = (img`
        . . . . . . . .
        . . . 1 . . . .
        . . 1 1 . . . .
        . 1 . 1 . . . .
        . . . 1 . . . .
        . . . 1 . . . .
        . . . 1 . . . .
        . 1 1 1 1 1 . .
    `)
    export const num2 = (img`
        . . . . . . . .
        . . 1 1 1 . . .
        . 1 . . . 1 . .
        . . . . 1 . . .
        . . . 1 . . . .
        . . 1 . . . . .
        . 1 . . . . . .
        . 1 1 1 1 1 . .
    `)
    export const num3 = (img`
        . . . . . . . .
        . . 1 1 1 . . .
        . 1 . . . 1 . .
        . . . . . 1 . .
        . . 1 1 1 . . .
        . . . . . 1 . .
        . 1 . . . 1 . .
        . . 1 1 1 . . .
    `)
    export const num4 = (img`
        . . . . . . . .
        . 1 . . . . . .
        . 1 . . . . . .
        . 1 . . . . . .
        . 1 . . . . . .
        . 1 . 1 . . . .
        . 1 1 1 1 1 . .
        . . . 1 . . . .
    `)
    export const num5 = (img`
        . . . . . . . .
        . 1 1 1 1 1 . .
        . 1 . . . . . .
        . 1 1 1 1 . . .
        . . . . . 1 . .
        . . . . . 1 . .
        . 1 . . . 1 . .
        . . 1 1 1 . . .
    `)
    export const num6 = (img`
        . . . . . . . .
        . . 1 1 1 . . .
        . 1 . . . 1 . .
        . 1 . . . . . .
        . 1 1 1 1 . . .
        . 1 . . . 1 . .
        . 1 . . . 1 . .
        . . 1 1 1 . . .
    `)
    export const num7 = (img`
        . . . . . . . .
        . 1 1 1 1 1 . .
        . . . . . 1 . .
        . . . . . 1 . .
        . . . . 1 . . .
        . . . . 1 . . .
        . . . 1 . . . .
        . . . 1 . . . .
    `)
    export const num8 = (img`
        . . . . . . . .
        . . 1 1 1 . . .
        . 1 . . . 1 . .
        . 1 . . . 1 . .
        . . 1 1 1 . . .
        . 1 . . . 1 . .
        . 1 . . . 1 . .
        . . 1 1 1 . . .
    `)
    export const num9 = (img`
        . . . . . . . .
        . . 1 1 1 . . .
        . 1 . . . 1 . .
        . 1 . . . 1 . .
        . . 1 1 1 1 . .
        . . . . . 1 . .
        . 1 . . . 1 . .
        . . 1 1 1 . . .
    `)
    export const Point = (img`
        . . . . . . . .
        . . . . . . . .
        . . . . . . . .
        . . . . . . . .
        . . . . . . . .
        . . . . . . . .
        . . . . . . . .
        . . . 1 . . . .
    `)
}
 class TexturedObj {
    Pos: Position
    Texture: Image
    Layer: number
    Scrolled: boolean
    constructor (Pos: Position, Texture: Image, Layer: number, Scrolled: boolean) {
        this.Pos = Pos
        this.Texture = Texture
        this.Layer = Math.floor(Layer)
        this.Scrolled = Scrolled
    }
}
function Render(Objects: TexturedObj[], Background: number, Xscroll: number, Yscroll: number, Layers: number) {
    let RenderedImage = image.create(160, 120)
    RenderedImage.fill(Background)
    let layer: TexturedObj[][] = []
    for (let i = 0; i < Layers; i++) {
        layer.push([])
    }
    for (let i = 0; i < Objects.length; i++) {
        layer[Objects[i].Layer - 1].push(Objects[i])
    }
    for (let layeri = 0; layeri < layer.length; layeri++) {
        for (let i = 0; i < layer[layeri].length; i++) {
            if (layer[layeri][i].Scrolled) {
                RenderedImage.drawTransparentImage(layer[layeri][i].Texture, layer[layeri][i].Pos.X - Xscroll, layer[layeri][i].Pos.Y - Yscroll)
            } else {
                RenderedImage.drawTransparentImage(layer[layeri][i].Texture, layer[layeri][i].Pos.X, layer[layeri][i].Pos.Y)
            }
        }
    }
    scene.setBackgroundImage(RenderedImage)
}
let seed = Math.random()
function perlin(x:number, y:number) {
    let x0 = Math.floor(x)
    let y0 = Math.floor(y)
    let x1 = x0 + 1
    let y1 = y0 + 1
    let sx = x - x0
    let sy = y - y0
    let n0 = null
    let n1 = null
    let ix0 = null
    let ix1 = null
    n0 = dotgridgradient(x0, y0, x, y)
    n1 = dotgridgradient(x1, y0, x, y)
    ix0 = lerp(n0, n1, sx)
    n0 = dotgridgradient(x0, y1, x, y)
    n1 = dotgridgradient(x1, y1, x, y)
    ix1 = lerp(n0, n1, sx)
    return(lerp(ix0, ix1, sy))
}
function dotgridgradient(ix: number, iy: number, x: number, y: number) {
    let Dx = x - ix
    let Dy = y - iy
    return ((Dx * hashedvec(ix, iy, false)) + (Dy * hashedvec(ix, iy, true)))
}
function lerp(a0:number, a1:number, w:number) {
    return (((1 - w) * a0) + (w * a1))
}
function hashedvec(x: number, y: number, xy: boolean) {
    let hashedseed = (Math.abs(((((seed - Math.PI) * 872.77 + Math.E) % 103.5) * 2673.57) % 130.7)) + 7
    let hashedx = Math.sin(((((x + 0.234) * (y - Math.PI)) * hashedseed + (x * y) + x) * 13298) % 313.23)
    let hashedy = Math.cos(((((y + 0.224) * (y - Math.PI)) * hashedseed + (x * x) - y) * 13114) % 237.48)
    let size = Math.sqrt((hashedx ** 2) + (hashedy ** 2))
    if (xy) {
        return (hashedy / size)
    } else {
        return (hashedx / size)
    }
}
class Position {
    X: number
    Y: number
    X0: number
    X1: number
    Y0: number
    Y1: number
    constructor (X: number, Y: number) {
        this.X = X
        this.Y = Y
    }
    Set (X: number, Y: number) {
        this.X = X
        this.Y = Y
        this.IsWrong()
    }
    SetX (X: number) {
        this.X = X
        this.IsWrong()
    }
    SetY (Y: number) {
        this.Y = Y
        this.IsWrong()
    }
    Move (X: number, Y: number) {
        this.X += X
        this.Y += Y
        this.IsWrong()
    }
    MoveX (X: number) {
        this.X += X
        this.IsWrong()
    }
    MoveY (Y: number) {
        this.Y += Y
        this.IsWrong()
    }
    XConstrain (X0: number, X1: number) {
        this.X0 = X0
        this.X1 = X1
    }
    YConstrain (Y0: number, Y1: number) {
        this.Y0 = Y0
        this.Y1 = Y1
    }
    Distance (Pos: Position) {
        return(Math.sqrt(((Pos.X - this.X) ** 2) + ((Pos.Y - this.Y) ** 2)))
    }
    private IsWrong() {
        this.X = Math.constrain(this.X, this.X0, this.X1)
        this.Y = Math.constrain(this.Y, this.Y0, this.Y1)
    }
}
let TileTypes: TileType[] = []
let EntityTypes: EntityType[][] = [[], [], []]
let ItemTypes: ItemType[] = []
let ParticleTypes: ParticleType[] = []
let Tiles: Tile[] = []
let Entities: Entity[] = []
let Items: Item[] = []
let Recipes: Recipe[] = []
let CraftingItems: Item[] = []
let Particles: Particle[] = []
for (let i = 0; i < 36; i++) {
    Items.push(null)
}
for (let i = 0; i < 9; i++) {
    CraftingItems.push(null)
}
class LootTable {
    Rolls: number
    Table: Item[]
    constructor (Rolls: number, Table: Item[]) {
        this.Rolls = Rolls
        this.Table = Table
    }
    Roll () {
        let DroppedItems: Item[] = []
        for (let Rolls = 0; Rolls < this.Rolls; Rolls++) {
            let pickeditem = Math.pickRandom(this.Table)
            DroppedItems.push(pickeditem)
        }
        return(DroppedItems)
    }
}
class Interaction {
    Storage: number
    IsInteractable:  boolean
    Items: Item[]
    constructor (IsInteractable: boolean = false, Storage: number = 0) {
        this.Storage = Storage
        this.IsInteractable = IsInteractable
        this.Items = []
        for (let i = 0; i < Storage; i++) {
            this.Items.push(null)
        }
    }
}
class TileType {
    Texture: Image
    Solid: boolean
    Health: number
    Type: number
    Drops: LootTable
    NeedsFloor: boolean
    Support: boolean
    Interact: Interaction
    constructor (Texture: Image, Solid: boolean, Support: boolean, NeedsFloor: boolean, Health: number, Type: number, Drops: LootTable, Interact: Interaction) {
        this.Texture = Texture
        this.Solid = Solid
        this.Health = Health
        this.Type = Type
        this.Drops = Drops
        this.NeedsFloor = NeedsFloor
        this.Interact = Interact
    }
}
class EntityType {
    Texture: Image
    Health: number
    Type: number
    Drops: LootTable
    Agressive: boolean
    constructor (Texture: Image, Type: number, Health: number, Drops: LootTable = new LootTable(0, []), Agressive: boolean = false) {
        this.Texture = Texture
        this.Health = Health
        this.Type = Type
        this.Drops = Drops
        this.Agressive = Agressive
    }
}
class ParticleType {
    Texture: Image[]
    constructor (Texture: Image[]) {
        this.Texture = Texture
    }
}
class ItemType {
    Texture: Image
    Type: number
    MaxStack: number
    ToolDamage: number
    Name: string
    CanBePlaced: boolean
    PlaceID: number
    constructor (Name: string, Texture: Image, Type: number, MaxStack: number, ToolDamage: number, PlaceID: number) {
        this.Texture = Texture
        this.Type = Type
        this.MaxStack = MaxStack
        this.ToolDamage = ToolDamage
        this.Name = Name
        this.PlaceID = PlaceID
        if (PlaceID == null) {
            this.CanBePlaced = false
        } else {
            this.CanBePlaced = true
        }
    }
}
class Tile {
    Pos: Position
    ID: number
    Active: boolean
    Health: number
    Variable: number
    constructor (Pos: Position, ID: number) {
        this.Pos = Pos
        this.ID = ID
        this.Active = true
        this.Health = TileTypes[ID].Health
    }
    Damage (Amount: number, Type: number) {
        if (Type == TileTypes[this.ID].Type && this.Health != null) {
            this.Health -= Amount
        } else if (this.Health != null){
            this.Health -= 0.5
        }
        if (this.Health <= 0 && this.Health != null) {
            this.Delete()
            return(true)
        } else if (this.Health != null){
            return(false)
        }
        if (this.Health == null) {
            return(true)
        }
        return(true)
    }
    Delete () {
        if (this.Active) {
            this.Active = false
            let Dropping = TileTypes[this.ID].Drops.Roll()
            for (let i = 0; i < Dropping.length; i++) {
                for (let num = 0; num < Dropping[i].Count; num++) {
                    NewEntity(new Entity(new Position(this.Pos.X * 16, this.Pos.Y * 16), 1, Dropping[i].ID))
                }
            }
        }
    }
}
class Entity {
    Pos: Position
    ID: number
    Type: number
    Active: boolean
    Velocity: Position
    IsOnGround: boolean
    Timer: number
    constructor (Pos: Position, Type: number, ID: number) {
        this.Pos = Pos
        this.ID = ID
        this.Type = Type
        this.Active = true
        this.Velocity = new Position(0, 0)
        this.IsOnGround = false
        if (Type == 1) {
            this.Velocity = new Position((Math.random() - 0.5) * 6, (Math.random() - 0.5) * 6)
        }
        this.Timer = 25
    }
    Delete () {
        if (this.Active) {
            this.Active = false
            if (this.Type == 2) {
                let Dropping = TileTypes[this.ID].Drops.Roll()
                for (let i = 0; i < Dropping.length; i++) {
                    for (let num = 0; num < Dropping[i].Count; num++) {
                        NewEntity(new Entity(new Position(this.Pos.X, this.Pos.Y), 1, Dropping[i].ID))
                    }
                }
            }
        }
    }
}
class Particle {
    Pos: Position
    ID: number
    Active: boolean
    Frame: number
    constructor (Pos: Position, ID: number) {
        this.Pos = Pos
        this.ID = ID
        this.Active = true
        this.Frame = 0
    }
    private Delete () {
        this.Active = false
    }
    SetFrame(Frame: number) {
        this.Frame = Frame
        if (this.Frame >= ParticleTypes[this.ID].Texture.length) {
            this.Delete()
        }
    }
    NextFrame() {
        this.Frame++
        if (this.Frame >= ParticleTypes[this.ID].Texture.length) {
            this.Delete()
        }
    }
}
class Item {
    ID: number
    Count: number
    Active: boolean
    constructor (Count: number, ID: number) {
        this.Count = Count
        this.ID = ID
        this.Active = true
    }
    Delete () {
        this.Active = false
    }
}
class Recipe {
    Recipe: Item[]
    Output: Item
    WorkStation: number[]
    constructor(Recipe: Item[], Output: Item, WorkStation: number[]) {
        this.Recipe = Recipe
        this.Output = Output
        this.WorkStation = WorkStation
    }
}
function NewTileType (ID: number, NEW: TileType) {
    while (TileTypes.length <= ID) {
        TileTypes.push(null)
    }
    TileTypes[ID] = NEW
}
function NewEntityType (ID: number, NEW: EntityType) {
    while (EntityTypes[NEW.Type].length <= ID) {
        EntityTypes[NEW.Type].push(null)
    }
    EntityTypes[NEW.Type][ID] = NEW
}
function NewParticleType (ID: number, NEW: ParticleType) {
    while (ParticleTypes.length <= ID) {
        ParticleTypes.push(null)
    }
    ParticleTypes[ID] = NEW
}
function NewItemType (ID: number, NEW: ItemType) {
    while (ItemTypes.length <= ID) {
        ItemTypes.push(null)
    }
    ItemTypes[ID] = NEW
    NewEntityType(ID, new EntityType(NEW.Texture, 1, null, new LootTable(0, []), false))
}
function NewTile (NEW: Tile) {
    let done = true
    for (let i = 0; i < Tiles.length; i++) {
        if (Tiles[i].Active == false) {
            done = false
            Tiles[i] = NEW
        }
    }
    if (done) {
        Tiles.push(NEW)
    }
}
function NewEntity (NEW: Entity) {
    let done = true
    for (let i = 0; i < Entities.length; i++) {
        if (Entities[i].Active == false) {
            done = false
            Entities[i] = NEW
        }
    }
    if (done) {
        Entities.push(NEW)
    }
}
function NewParticle (NEW: Particle) {
    let done = true
    for (let i = 0; i < Particles.length; i++) {
        if (Particles[i].Active == false) {
            done = false
            Particles[i] = NEW
        }
    }
    if (done) {
        Particles.push(NEW)
    }
}
function NewItem (NEW: Item) {
    let done = true
    for (let i = 0; i < Items.length; i++) {
        if (done) {
            if (Items[i] == null) {
                if (NEW.Count > ItemTypes[NEW.ID].MaxStack) {
                    Items[i] = new Item(ItemTypes[NEW.ID].MaxStack, NEW.ID)
                    NEW.Count -= ItemTypes[NEW.ID].MaxStack
                } else {
                    Items[i] = NEW
                    done = false
                }
            } else if (Items[i].Active == false) {
                done = false
                Items[i] = NEW
            } else if (Items[i].ID == NEW.ID) {
                if (Items[i].Count + NEW.Count <= ItemTypes[NEW.ID].MaxStack) {
                    Items[i].Count += NEW.Count
                    done = false
                } else {
                    NEW.Count -= ItemTypes[NEW.ID].MaxStack - Items[i].Count
                    Items[i].Count = ItemTypes[NEW.ID].MaxStack
                }
            }
        }
    }
    if (done) {
        for (let i = 0; i < NEW.Count; i++) {
            NewEntity(new Entity(new Position(GetPlayer().Pos.X, GetPlayer().Pos.Y), 1, NEW.ID))
        }
    }
}
function NewRecipe (NEW: Recipe) {
    Recipes.push(NEW)
}
function SetupRenderer () {
    let objs: TexturedObj[] = []
    let PlayerPos = GetPlayer().Pos
    let PlayerPosInTiles = new Position(PlayerPos.X / 16, PlayerPos.Y / 16)
    for (let i = 0; i < Tiles.length; i++) {
        if (Tiles[i].Pos.Distance(PlayerPosInTiles) <= RenderDistance) {
            if (Tiles[i].Active) {
                objs.push(new TexturedObj(new Position(Tiles[i].Pos.X * 16, Tiles[i].Pos.Y * 16), TileTypes[Tiles[i].ID].Texture, 2, true))
            }
        }
    }
    for (let i = 0; i < Entities.length; i++) {
        if (Entities[i].Pos.Distance(PlayerPos) <= RenderDistance * 16) {
            if (Entities[i].Active) {
                objs.push(new TexturedObj(Entities[i].Pos, EntityTypes[Entities[i].Type][Entities[i].ID].Texture, 3, true))
            }
        }
    }
    for (let i = 0; i < Particles.length; i++) {
        if (Particles[i].Pos.Distance(PlayerPos) <= RenderDistance * 16) {
            if (Particles[i].Active && Particles[i].Frame < ParticleTypes[Particles[i].ID].Texture.length) {
                objs.push(new TexturedObj(Particles[i].Pos, ParticleTypes[Particles[i].ID].Texture[Particles[i].Frame], 4, true))
            }
        }
    }
    if (InInventory) {
        let Screen = image.create(160, 120)
        Screen.fill(13)
        for (let i = 0; i < Items.length; i++) {
            let Slot = img`
                1 1 1 1 1 1 1 d d d d
                1 d d d d d d d d d b
                1 d d d d d d d d d b
                1 d d d d d d d d d b
                d d d d d d d d d d b
                d d d d d d d d d d c
                d d d d d d d d d d c
                b d d d d d d d d d c
                b d d d d d d d d d c
                b d d d d d d d d d c
                b c c c c c c c c c c
            `
            if (Items[i] != null && HighlightedItem == i && Items[i].Active) {
                DrawString(ItemTypes[Items[i].ID].Name, 100, 10, Screen)
                DrawString("X " + Items[i].Count.toString(), 100, 20, Screen)
                Screen.replace(0, 13)
                Slot = img`
                    3 3 3 3 3 3 3 5 5 5 5
                    3 5 5 5 5 5 5 5 5 5 4
                    3 5 5 5 5 5 5 5 5 5 4
                    3 5 5 5 5 5 5 5 5 5 4
                    5 5 5 5 5 5 5 5 5 5 4
                    5 5 5 5 5 5 5 5 5 5 2
                    5 5 5 5 5 5 5 5 5 5 2
                    4 5 5 5 5 5 5 5 5 5 2
                    4 5 5 5 5 5 5 5 5 5 2
                    4 5 5 5 5 5 5 5 5 5 2
                    4 2 2 2 2 2 2 2 2 2 2
                `
            } else if (HighlightedItem == i) {
                Slot = img`
                    3 3 3 3 3 3 3 5 5 5 5
                    3 5 5 5 5 5 5 5 5 5 4
                    3 5 5 5 5 5 5 5 5 5 4
                    3 5 5 5 5 5 5 5 5 5 4
                    5 5 5 5 5 5 5 5 5 5 4
                    5 5 5 5 5 5 5 5 5 5 2
                    5 5 5 5 5 5 5 5 5 5 2
                    4 5 5 5 5 5 5 5 5 5 2
                    4 5 5 5 5 5 5 5 5 5 2
                    4 5 5 5 5 5 5 5 5 5 2
                    4 2 2 2 2 2 2 2 2 2 2
                `
            } else if (Items[i] != null && DraggingItem == i) {
                Slot = img`
                    d d d d d d d 9 9 9 9
                    d 9 9 9 9 9 9 9 9 9 6
                    d 9 9 9 9 9 9 9 9 9 6
                    d 9 9 9 9 9 9 9 9 9 6
                    9 9 9 9 9 9 9 9 9 9 6
                    9 9 9 9 9 9 9 9 9 9 8
                    9 9 9 9 9 9 9 9 9 9 8
                    6 9 9 9 9 9 9 9 9 9 8
                    6 9 9 9 9 9 9 9 9 9 8
                    6 9 9 9 9 9 9 9 9 9 8
                    6 8 8 8 8 8 8 8 8 8 8
                `
            }
            Screen.drawImage(Slot, ((i % (Items.length / 4)) * 11), (Math.floor(i / (Items.length / 4)) * 11))
        } 
        for (let i = Items.length; i < CraftingItems.length + Items.length; i++) {
            let Slot = img`
                1 1 1 1 1 1 1 d d d d
                1 d d d d d d d d d b
                1 d d d d d d d d d b
                1 d d d d d d d d d b
                d d d d d d d d d d b
                d d d d d d d d d d c
                d d d d d d d d d d c
                b d d d d d d d d d c
                b d d d d d d d d d c
                b d d d d d d d d d c
                b c c c c c c c c c c
            `
            if (CraftingItems[i - Items.length] != null && HighlightedItem == i && CraftingItems[i - Items.length].Active) {
                DrawString(ItemTypes[CraftingItems[i - Items.length].ID].Name, 100, 10, Screen)
                DrawString("X " + CraftingItems[i - Items.length].Count.toString(), 100, 20, Screen)
                Screen.replace(0, 13)
                Slot = img`
                    3 3 3 3 3 3 3 5 5 5 5
                    3 5 5 5 5 5 5 5 5 5 4
                    3 5 5 5 5 5 5 5 5 5 4
                    3 5 5 5 5 5 5 5 5 5 4
                    5 5 5 5 5 5 5 5 5 5 4
                    5 5 5 5 5 5 5 5 5 5 2
                    5 5 5 5 5 5 5 5 5 5 2
                    4 5 5 5 5 5 5 5 5 5 2
                    4 5 5 5 5 5 5 5 5 5 2
                    4 5 5 5 5 5 5 5 5 5 2
                    4 2 2 2 2 2 2 2 2 2 2
                `
            } else if (HighlightedItem == i) {
                Slot = img`
                    3 3 3 3 3 3 3 5 5 5 5
                    3 5 5 5 5 5 5 5 5 5 4
                    3 5 5 5 5 5 5 5 5 5 4
                    3 5 5 5 5 5 5 5 5 5 4
                    5 5 5 5 5 5 5 5 5 5 4
                    5 5 5 5 5 5 5 5 5 5 2
                    5 5 5 5 5 5 5 5 5 5 2
                    4 5 5 5 5 5 5 5 5 5 2
                    4 5 5 5 5 5 5 5 5 5 2
                    4 5 5 5 5 5 5 5 5 5 2
                    4 2 2 2 2 2 2 2 2 2 2
                `
            } else if (CraftingItems[i - Items.length] != null && DraggingItem == i) {
                Slot = img`
                    d d d d d d d 9 9 9 9
                    d 9 9 9 9 9 9 9 9 9 6
                    d 9 9 9 9 9 9 9 9 9 6
                    d 9 9 9 9 9 9 9 9 9 6
                    9 9 9 9 9 9 9 9 9 9 6
                    9 9 9 9 9 9 9 9 9 9 8
                    9 9 9 9 9 9 9 9 9 9 8
                    6 9 9 9 9 9 9 9 9 9 8
                    6 9 9 9 9 9 9 9 9 9 8
                    6 9 9 9 9 9 9 9 9 9 8
                    6 8 8 8 8 8 8 8 8 8 8
                `
            }
            Screen.drawImage(Slot, (((i - Items.length) % (CraftingItems.length / 3)) * 11) + 22, (Math.floor((i - Items.length) / (CraftingItems.length / 3)) * 11) + 66)
        }
        let Recipe: number = GetRecipe()
        if (Recipe != null) {
            DrawString(ItemTypes[Recipes[Recipe].Output.ID].Name, 70, 70, Screen)
            DrawString("X " + Recipes[Recipe].Output.Count.toString(), 70, 80, Screen)
            Screen.replace(0, 13)
        }
        if (UsingStation != -1) {
            for (let i = CraftingItems.length + Items.length; i < TileTypes[UsingStation].Interact.Storage + CraftingItems.length + Items.length; i++) {
                let Slot = img`
                1 1 1 1 1 1 1 d d d d
                1 d d d d d d d d d b
                1 d d d d d d d d d b
                1 d d d d d d d d d b
                d d d d d d d d d d b
                d d d d d d d d d d c
                d d d d d d d d d d c
                b d d d d d d d d d c
                b d d d d d d d d d c
                b d d d d d d d d d c
                b c c c c c c c c c c
            `
                if (TileTypes[UsingStation].Interact.Items[i - (CraftingItems.length + Items.length)] != null && HighlightedItem == i && CraftingItems[i - Items.length].Active) {
                    DrawString(ItemTypes[TileTypes[UsingStation].Interact.Items[i - (CraftingItems.length + Items.length)].ID].Name, 100, 10, Screen)
                    DrawString("X " + TileTypes[UsingStation].Interact.Items[i - (CraftingItems.length + Items.length)].Count.toString(), 100, 20, Screen)
                    Screen.replace(0, 13)
                    Slot = img`
                    3 3 3 3 3 3 3 5 5 5 5
                    3 5 5 5 5 5 5 5 5 5 4
                    3 5 5 5 5 5 5 5 5 5 4
                    3 5 5 5 5 5 5 5 5 5 4
                    5 5 5 5 5 5 5 5 5 5 4
                    5 5 5 5 5 5 5 5 5 5 2
                    5 5 5 5 5 5 5 5 5 5 2
                    4 5 5 5 5 5 5 5 5 5 2
                    4 5 5 5 5 5 5 5 5 5 2
                    4 5 5 5 5 5 5 5 5 5 2
                    4 2 2 2 2 2 2 2 2 2 2
                `
                } else if (HighlightedItem == i) {
                    Slot = img`
                    3 3 3 3 3 3 3 5 5 5 5
                    3 5 5 5 5 5 5 5 5 5 4
                    3 5 5 5 5 5 5 5 5 5 4
                    3 5 5 5 5 5 5 5 5 5 4
                    5 5 5 5 5 5 5 5 5 5 4
                    5 5 5 5 5 5 5 5 5 5 2
                    5 5 5 5 5 5 5 5 5 5 2
                    4 5 5 5 5 5 5 5 5 5 2
                    4 5 5 5 5 5 5 5 5 5 2
                    4 5 5 5 5 5 5 5 5 5 2
                    4 2 2 2 2 2 2 2 2 2 2
                `
                } else if (TileTypes[UsingStation].Interact.Items[i - (CraftingItems.length + Items.length)] != null && DraggingItem == i) {
                    Slot = img`
                    d d d d d d d 9 9 9 9
                    d 9 9 9 9 9 9 9 9 9 6
                    d 9 9 9 9 9 9 9 9 9 6
                    d 9 9 9 9 9 9 9 9 9 6
                    9 9 9 9 9 9 9 9 9 9 6
                    9 9 9 9 9 9 9 9 9 9 8
                    9 9 9 9 9 9 9 9 9 9 8
                    6 9 9 9 9 9 9 9 9 9 8
                    6 9 9 9 9 9 9 9 9 9 8
                    6 9 9 9 9 9 9 9 9 9 8
                    6 8 8 8 8 8 8 8 8 8 8
                `
                }
                Screen.drawImage(Slot, (((i - Items.length - CraftingItems.length) % (TileTypes[UsingStation].Interact.Storage / 3)) * 11) + 33 + ((CraftingItems.length / 3) * 11), (Math.floor((i - Items.length - CraftingItems.length) / (TileTypes[UsingStation].Interact.Storage / 3)) * 11) + 88)
            }
        }
        objs.push(new TexturedObj(new Position(0, 0), Screen, 5, false))
    } else {
        let Screen = image.create(160, 120)
        Screen.fill(0)
        for (let i = 0; i < (Items.length / 4); i++) {
            let Slot = img`
                1 1 1 1 1 1 1 d d d d
                1 d d d d d d d d d b
                1 d d d d d d d d d b
                1 d d d d d d d d d b
                d d d d d d d d d d b
                d d d d d d d d d d c
                d d d d d d d d d d c
                b d d d d d d d d d c
                b d d d d d d d d d c
                b d d d d d d d d d c
                b c c c c c c c c c c
            `
            if (HighlightedItem == i) {
                Slot = img`
                    3 3 3 3 3 3 3 5 5 5 5
                    3 5 5 5 5 5 5 5 5 5 4
                    3 5 5 5 5 5 5 5 5 5 4
                    3 5 5 5 5 5 5 5 5 5 4
                    5 5 5 5 5 5 5 5 5 5 4
                    5 5 5 5 5 5 5 5 5 5 2
                    5 5 5 5 5 5 5 5 5 5 2
                    4 5 5 5 5 5 5 5 5 5 2
                    4 5 5 5 5 5 5 5 5 5 2
                    4 5 5 5 5 5 5 5 5 5 2
                    4 2 2 2 2 2 2 2 2 2 2
                `
            }
            Screen.drawImage(Slot, (i * 11) + 25, 109)
        } 
        objs.push(new TexturedObj(new Position(0, 0), Screen, 5, false))
    }
    if (InInventory) {
        for (let i = 0; i < Items.length; i++) {
            if (Items[i] != null && Items[i].Active) {
                objs.push(new TexturedObj(new Position(((i % (Items.length / 4)) * 11) + 1, (Math.floor(i / (Items.length / 4)) * 11) + 1), ItemTypes[Items[i].ID].Texture, 6, false))
            }
        } 
        for (let i = Items.length; i < CraftingItems.length + Items.length; i++) {
            if (CraftingItems[i - Items.length] != null && CraftingItems[i - Items.length].Active) {
                objs.push(new TexturedObj(new Position((((i - Items.length) % (CraftingItems.length / 3)) * 11) + 23, (Math.floor((i - Items.length) / (CraftingItems.length / 3)) * 11) + 67), ItemTypes[CraftingItems[i - Items.length].ID].Texture, 6, false))
            }
        } 
        if (UsingStation != -1) {
            for (let i = CraftingItems.length + Items.length; i < TileTypes[UsingStation].Interact.Storage + CraftingItems.length + Items.length; i++) {
                if (TileTypes[UsingStation].Interact.Items[i - Items.length - CraftingItems.length] != null) {
                    objs.push(new TexturedObj(new Position((((i - Items.length - CraftingItems.length) % (TileTypes[UsingStation].Interact.Storage / 3)) * 11) + 32 + ((CraftingItems.length / 3) * 11), (Math.floor((i - Items.length - CraftingItems.length) / (TileTypes[UsingStation].Interact.Storage / 3)) * 11) + 87), ItemTypes[TileTypes[UsingStation].Interact.Items[i - Items.length - CraftingItems.length].ID].Texture, 6, false))
                }
            }
        }
    } else {
        for (let i = 0; i < (Items.length / 4); i++) {
            if (Items[i] != null && Items[i].Active) {
                objs.push(new TexturedObj(new Position((i * 11) + 26, 110), ItemTypes[Items[i].ID].Texture, 6, false))
            }
        }
    }
    Render(objs, 9, GetPlayer().Pos.X - 72, GetPlayer().Pos.Y - 52, 6)
}
function GetPlayer() {
    for (let i = 0; i < Entities.length; i++) {
        if (Entities[i].Type == 0) {
            return (Entities[i])
        }
    }
    return(null)
}
function GetRecipe () {
    for (let i = 0; i < Recipes.length; i++) {
        let done = true
        for (let i2 = 0; i2 < CraftingItems.length; i2++) {
            if (CraftingItems[i2] != null && Recipes[i].Recipe[i2] != null) {
                if (CraftingItems[i2].Count < Recipes[i].Recipe[i2].Count || CraftingItems[i2].ID != Recipes[i].Recipe[i2].ID) {
                    done = false
                }   
            } else if ((CraftingItems[i2] == null && Recipes[i].Recipe[i2] == null)) {
                //done = true
            } else {
                done = false 
            }
        }
        let done2 = false
        for (let i2 = 0; i2 < Recipes[i].WorkStation.length; i2++) {
            if (Recipes[i].WorkStation[i2] == UsingStation) {
                done2 = true
            }
        }
        if (done && done2) {
            return(i)
        }
    }
    return(null)
}
let WorldSize: Position = new Position(100, 25)
let WidthStretch = 3
let HeightStretch = 4
let AverageHeight = 13
let Sealevel = 12
let StoneDepth = 3
let Gravity = 0.5
let RenderDistance = 6.8
let MagnetDistance = 1
let CaveChance = 45
let CaveSmoothing = 3
NewEntityType(0, new EntityType(img`
    . . . . . . f f f f . . . . . .
    . . . . f f f 2 2 f f f . . . .
    . . . f f f 2 2 2 2 f f f . . .
    . . f f f e e e e e e f f f . .
    . . f f e 2 2 2 2 2 2 e e f . .
    . . f e 2 f f f f f f 2 e f . .
    . . f f f f e e e e f f f f . .
    . f f e f b f 4 4 f b f e f f .
    . f e e 4 1 f d d f 1 4 e e f .
    . . f e e d d d d d d e e f . .
    . . . f e e 4 4 4 4 e e f . . .
    . . e 4 f 2 2 2 2 2 2 f 4 e . .
    . . 4 d f 2 2 2 2 2 2 f d 4 . .
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . .
    . . . . . f f f f f f . . . . .
    . . . . . f f . . f f . . . . .
`, 0, 100, new LootTable(0, []), false))
function GenerateWorld () {
    let Caves = MakeCaves()
    for (let x = 0; x < WorldSize.X; x++) {
        let SurfaceHeight = Math.clamp(0, WorldSize.Y, Math.round((((perlin(x / (WidthStretch * 4), 0) + perlin(x / (WidthStretch * 2), 10) + perlin(x / (WidthStretch * 1), 20))) * HeightStretch) + AverageHeight))
        let StoneHeight = Math.clamp(0, WorldSize.Y, SurfaceHeight - ((perlin(x / (WidthStretch * 1), 30) * HeightStretch) + StoneDepth))
        for (let y = 0; y < WorldSize.Y; y++) {
            if (x == 0 || x == WorldSize.X - 1 || y == 0) {
                NewTile(new Tile(new Position(x, WorldSize.Y - y), 10))
            } else if (Caves[x][y] == false || y > StoneHeight - 1) {
                if (y <= StoneHeight) {
                    NewTile(new Tile(new Position(x, WorldSize.Y - y), 2))
                } else if (y < SurfaceHeight) {
                    if (SurfaceHeight < Sealevel) {
                        NewTile(new Tile(new Position(x, WorldSize.Y - y), 6))
                    } else {
                        NewTile(new Tile(new Position(x, WorldSize.Y - y), 1))
                    }
                } else if (y == SurfaceHeight) {
                    if (SurfaceHeight < Sealevel) {
                        NewTile(new Tile(new Position(x, WorldSize.Y - y), 5))
                    } else {
                    NewTile(new Tile(new Position(x, WorldSize.Y - y), 0))
                    }
                } else if (y == SurfaceHeight + 1 && Math.percentChance(50) && SurfaceHeight >= Sealevel) {
                    if (Math.percentChance(70)) {
                        NewTile(new Tile(new Position(x, WorldSize.Y - y), 3))
                    } else {
                        GrowTree(new Position(x, WorldSize.Y - y))
                    }
                } else if (y >= SurfaceHeight + 1 && y <= Sealevel) {
                    NewTile(new Tile(new Position(x, WorldSize.Y - y), 4))
                }
            }
        }
    }
}
function GrowTree(Pos: Position) {
    let Height = Math.pickRandom([1, 2, 3, 3, 4, 4, 4, 5, 5, 6, 7])
    for (let i = 0; i < Height - 1; i++) {
        NewTile(new Tile(new Position(Pos.X, Pos.Y), 7))
        Pos.MoveY(-1)
    }
    NewTile(new Tile(new Position(Pos.X, Pos.Y), 8))
}
function MakeCaves () {
    let Board: boolean[][] = []
    let Buffer: boolean[][] = []
    for (let x = 0; x < WorldSize.X; x++) {
        let row: boolean[] = []
        for (let y = 0; y < WorldSize.Y; y++) {
            row.push(Math.percentChance(CaveChance))
        }
        Board.push(row)
    }
    Buffer = Board
    for (let i = 0; i < CaveSmoothing; i++) {
        for (let x = 0; x < WorldSize.X; x++) {
            for (let y = 0; y < WorldSize.Y; y++) {
                let Neighbours: number = 0
                for (let x2 = -1; x2 < 2; x2++) {
                    for (let y2 = -1; y2 < 2; y2++) {
                        if ((x2 != 0 || y2 != 0) && x2 + x != -1 && x2 + x != WorldSize.X && y2 + y != -1 && y2 + y != WorldSize.Y) {
                            if (Board[x + x2][y + y2]) {
                                Neighbours++
                            }
                        }
                    }
                }
                if (Neighbours < 4) {
                    Buffer[x][y] = false
                } else if (Neighbours > 4) {
                    Buffer[x][y] = true
                } else {
                    Buffer[x][y] = Board[x][y]
                }
            }
        }
        Board = Buffer
    }
    return(Board)
} 
function Update() {
    for (let i = 0; i < Entities.length; i++) {
        if (Entities[i].Pos.Distance(GetPlayer().Pos) <= RenderDistance * 16 && Entities[i].Active) {
            let onen = Entities[i]
            let onty = EntityTypes[onen.Type][onen.ID]
            onen.Velocity.MoveY(Gravity)
            if (IsColliding(new Position(onen.Pos.X + onen.Velocity.X + 1, onen.Pos.Y + onen.Velocity.Y + 1), onty.Texture.width - 2, onty.Texture.height - 2)) {
                let SavedY = onen.Velocity.Y
                onen.Velocity.SetY(0)
                if (IsColliding(new Position(onen.Pos.X + onen.Velocity.X + 1, onen.Pos.Y + onen.Velocity.Y + 1), onty.Texture.width - 2, onty.Texture.height - 2)) {
                    onen.Velocity.SetX(0)
                    onen.Velocity.SetY(SavedY)
                    if (IsColliding(new Position(onen.Pos.X + onen.Velocity.X + 1, onen.Pos.Y + onen.Velocity.Y + 1), onty.Texture.width - 2, onty.Texture.height - 2)) {
                        onen.Velocity.SetY(0)
                        onen.IsOnGround = true
                    } else {
                        onen.Pos.MoveY(onen.Velocity.Y)
                        onen.IsOnGround = false
                    }
                } else {
                    onen.Pos.MoveX(onen.Velocity.X)
                    onen.IsOnGround = true
                }
            } else {
                onen.Pos.Move(onen.Velocity.X, onen.Velocity.Y)
                onen.IsOnGround = false
            }
            onen.Velocity.Set(Math.round(onen.Velocity.X / 3), onen.Velocity.Y)
            if (Entities[i].Pos.Distance(GetPlayer().Pos) <= MagnetDistance * 16 && onen.Timer <= 0 && onen.Type == 1) {
                NewItem(new Item(1, onen.ID))
                onen.Delete()
            }
            if (onen.Type == 1) {
                onen.Timer--
            }
        }
    }
    for (let i = 0; i < Tiles.length; i++) {
        if (Tiles[i].Pos.Distance(new Position(GetPlayer().Pos.X / 16, GetPlayer().Pos.Y / 16)) <= RenderDistance) {
            if (TileTypes[Tiles[i].ID].NeedsFloor && ((GetTileAt(new Position(Tiles[i].Pos.X, Tiles[i].Pos.Y + 1)).Active == false || TileTypes[GetTileAt(new Position(Tiles[i].Pos.X, Tiles[i].Pos.Y + 1)).ID].Support == false))) {
                Tiles[i].Delete()
            } else if (Tiles[i].ID == 4) {
                let Down = GetTileAt(new Position(Tiles[i].Pos.X + 0, Tiles[i].Pos.Y + 1))
                if (Down == null || (TileTypes[Down.ID].Solid == false && Down.ID != 4) || Down.Active == false) {
                    Down.Delete()
                    NewTile(new Tile(new Position(Tiles[i].Pos.X + 0, Tiles[i].Pos.Y + 1), 11))
                } else {
                    let Left = GetTileAt(new Position(Tiles[i].Pos.X + -1, Tiles[i].Pos.Y + 0))
                    let Right = GetTileAt(new Position(Tiles[i].Pos.X + 1, Tiles[i].Pos.Y + 0))
                    if (Left == null || (TileTypes[Left.ID].Solid == false && Left.ID != 4 && Left.ID != 11) || Left.Active == false) {
                        Left.Delete()
                        NewTile(new Tile(new Position(Tiles[i].Pos.X + -1, Tiles[i].Pos.Y + 0), 11))
                    }
                    if (Right == null || (TileTypes[Right.ID].Solid == false && Right.ID != 4 && Right.ID != 11) || Right.Active == false) {
                        Right.Delete()
                        NewTile(new Tile(new Position(Tiles[i].Pos.X + 1, Tiles[i].Pos.Y + 0), 11))
                    }
                }
            } else if (Tiles[i].ID == 11) {
                let Down = GetTileAt(new Position(Tiles[i].Pos.X + 0, Tiles[i].Pos.Y + 1))
                if (Down == null || (TileTypes[Down.ID].Solid == false && Down.ID != 4) || Down.Active == false) {
                    Down.Delete()
                    NewTile(new Tile(new Position(Tiles[i].Pos.X + 0, Tiles[i].Pos.Y + 1), 11))
                } else {
                    let Left = GetTileAt(new Position(Tiles[i].Pos.X + -1, Tiles[i].Pos.Y + 0))
                    let Right = GetTileAt(new Position(Tiles[i].Pos.X + 1, Tiles[i].Pos.Y + 0))
                    if (Left == null || (TileTypes[Left.ID].Solid == false && Left.ID != 4 && Left.ID != 11) || Left.Active == false) {
                        Left.Delete()
                        NewTile(new Tile(new Position(Tiles[i].Pos.X + -1, Tiles[i].Pos.Y + 0), 12))
                    }
                    if (Right == null || (TileTypes[Right.ID].Solid == false && Right.ID != 4 && Right.ID != 11) || Right.Active == false) {
                        Right.Delete()
                        NewTile(new Tile(new Position(Tiles[i].Pos.X + 1, Tiles[i].Pos.Y + 0), 12))
                    }
                }
            } else if (Tiles[i].ID == 12) {
                let Down = GetTileAt(new Position(Tiles[i].Pos.X + 0, Tiles[i].Pos.Y + 1))
                if (Down == null || (TileTypes[Down.ID].Solid == false && Down.ID != 4) || Down.Active == false) {
                    Down.Delete()
                    NewTile(new Tile(new Position(Tiles[i].Pos.X + 0, Tiles[i].Pos.Y + 1), 11))
                } else {
                    let Left = GetTileAt(new Position(Tiles[i].Pos.X + -1, Tiles[i].Pos.Y + 0))
                    let Right = GetTileAt(new Position(Tiles[i].Pos.X + 1, Tiles[i].Pos.Y + 0))
                    if (Left == null || (TileTypes[Left.ID].Solid == false && Left.ID != 4 && Left.ID != 11 && Left.ID != 12) || Left.Active == false) {
                        Left.Delete()
                        NewTile(new Tile(new Position(Tiles[i].Pos.X + -1, Tiles[i].Pos.Y + 0), 13))
                    }
                    if (Right == null || (TileTypes[Right.ID].Solid == false && Right.ID != 4 && Right.ID != 11 && Right.ID != 12) || Right.Active == false) {
                        Right.Delete()
                        NewTile(new Tile(new Position(Tiles[i].Pos.X + 1, Tiles[i].Pos.Y + 0), 13))
                    }
                }
            } else if (Tiles[i].ID == 13) {
                let Down = GetTileAt(new Position(Tiles[i].Pos.X + 0, Tiles[i].Pos.Y + 1))
                if (Down == null || (TileTypes[Down.ID].Solid == false && Down.ID != 4) || Down.Active == false) {
                    Down.Delete()
                    NewTile(new Tile(new Position(Tiles[i].Pos.X + 0, Tiles[i].Pos.Y + 1), 11))
                } else {
                    let Left = GetTileAt(new Position(Tiles[i].Pos.X + -1, Tiles[i].Pos.Y + 0))
                    let Right = GetTileAt(new Position(Tiles[i].Pos.X + 1, Tiles[i].Pos.Y + 0))
                    if (Left == null || (TileTypes[Left.ID].Solid == false && Left.ID != 4 && Left.ID != 11 && Left.ID != 12 && Left.ID != 13) || Left.Active == false) {
                        Left.Delete()
                        NewTile(new Tile(new Position(Tiles[i].Pos.X + -1, Tiles[i].Pos.Y + 0), 14))
                    }
                    if (Right == null || (TileTypes[Right.ID].Solid == false && Right.ID != 4 && Right.ID != 11 && Right.ID != 12 && Right.ID != 13) || Right.Active == false) {
                        Right.Delete()
                        NewTile(new Tile(new Position(Tiles[i].Pos.X + 1, Tiles[i].Pos.Y + 0), 14))
                    }
                }
            } else if (Tiles[i].ID == 14) {
                let Down = GetTileAt(new Position(Tiles[i].Pos.X + 0, Tiles[i].Pos.Y + 1))
                if (Down == null || (TileTypes[Down.ID].Solid == false && Down.ID != 4) || Down.Active == false) {
                    Down.Delete()
                    NewTile(new Tile(new Position(Tiles[i].Pos.X + 0, Tiles[i].Pos.Y + 1), 11))
                }
            }
        }
    }
}
function IsColliding(Pos: Position, Width: number, Height: number) {
    if (TileTypes[GetTileAt(new Position(Math.floor((Pos.X + 1) / 16), Math.floor((Pos.Y + 1) / 16))).ID].Solid) {
        return(true)
    } if (TileTypes[GetTileAt(new Position(Math.floor((Pos.X + Width - 1) / 16), Math.floor((Pos.Y + Height - 1) / 16))).ID].Solid) {
        return(true)
    } if (TileTypes[GetTileAt(new Position(Math.floor((Pos.X + 1) / 16), Math.floor((Pos.Y + Height - 1) / 16))).ID].Solid) {
        return(true)
    } if (TileTypes[GetTileAt(new Position(Math.floor((Pos.X + Width - 1) / 16), Math.floor((Pos.Y + 1) / 16))).ID].Solid) {
        return(true)
    } else {
        return (false)
    }
}
function GetTileAt(Pos: Position) {
    for (let i = 0; i < Tiles.length; i++) {
        if (Tiles[i].Pos.X == Pos.X && Tiles[i].Pos.Y == Pos.Y && Tiles[i].Active) {
            return(Tiles[i])
        }
    }
    let inactive = new Tile(Pos, 4)
    inactive.Active = false
    return(inactive)
}
function GroundAt(X: number) {
    let Y = 0
    while (TileTypes[GetTileAt(new Position(X, Y)).ID].Solid == false) {
        Y++
    } 
    return (Y - 1)
}
NewTileType(0, new TileType(img`
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 e 7 7 7 e 7 7 7 7 7 7 7 7 7 7
    7 e 7 e 7 e 7 7 7 7 7 7 e 7 7 e
    e e 7 e 7 e e e 7 e 7 e e 7 e e
    e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e
`, true, true, false, 20, 3, new LootTable(1, [new Item(1, 0)]), new Interaction()))
NewTileType(1, new TileType(img`
    e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e
`, true, true, false, 20, 3, new LootTable(1, [new Item(1, 0)]), new Interaction()))
NewTileType(2, new TileType(img`
    d d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d d
`, true, true, false, 80, 2, new LootTable(1, [new Item(1, 1)]), new Interaction()))
NewTileType(3, new TileType(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    7 . 7 . . 7 . . . . 7 . 7 . . .
    7 7 7 7 . 7 7 . 7 . 7 . 7 . 7 7
    7 7 7 7 7 7 7 7 7 . 7 7 7 . 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
`, false, false, true, 2, 0, new LootTable(1, [new Item(0, 0), new Item(1, 5)]), new Interaction()))
NewTileType(4, new TileType(img`
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
`, false, false, false, null, 0, new LootTable(0, [new Item(0, 0)]), new Interaction()))
NewTileType(5, new TileType(img`
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
`, true, true, true, 20, 3, new LootTable(1, [new Item(1, 6)]), new Interaction()))
NewTileType(6, new TileType(img`
    c c c f c c c f c e c e c c c f
    c e c e c e c e c c c f c e c e
    c c c f c c c f b b b e c c c f
    b b b e b b b e b f b f b b b e
    b f b f b f b f c c c f b f b f
    b b b e b b b e c e c e b b b e
    c c c f b b b b c c c c c c f b
    c e c e c c f c b b b c e c e b
    c c c c c f e c b f b c c c f b
    b b c e c e f c b b b b b b e b
    b f c c c f c c f c c b f b f c
    b b b b b e e c e c e b b b e c
    c c b f b f c c f c c c f c c c
    b b b b b e b b e b b b e b b b
    b f b f b b f b f b f b f b f b
    b b b e f b b b e b b b e b b b
`, true, true, true, 20, 3, new LootTable(1, [new Item(1, 8), new Item(1, 7), new Item(1, 7), new Item(1, 7)]), new Interaction()))
NewTileType(7, new TileType(img`
    . . . . . e e e e e 4 e . . . .
    . 7 7 7 . e e e e e 4 e . . . .
    . 7 7 7 . e e e 4 e 4 e . . . .
    . 7 7 7 . e e e 4 e 4 e . . . .
    . . . e e e e e 4 e 4 e . . 7 .
    . . . . e e e e 4 e 4 e . 7 7 7
    . . . . . e e e 4 e e e . . e .
    . 7 7 7 . e e e 4 e e e e e e .
    7 7 7 7 7 e 4 e 4 e e e e 7 . .
    7 7 7 2 7 e 4 e 4 e e e . . . .
    7 2 7 7 7 e 4 e 4 e 4 e . . 7 7
    . 7 7 7 . e 4 e e e 4 e . 7 7 2
    . . . e e e 4 e e e 4 e e e 7 7
    . . . . e e 4 e e e 4 e e . . .
    . . . . . e 4 e e e 4 e . . . .
    . . . . . e e e e e 4 e . . . .
`, false, true, true, 30, 1, new LootTable(1, [new Item(1, 2)]), new Interaction()))
NewTileType(8, new TileType(img`
    . . . . . . . . . . . . . . . .
    . . . . . 7 7 7 7 7 7 7 . . . .
    . . . 7 7 7 2 7 7 7 7 7 7 . . .
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . .
    . . 7 7 7 7 7 7 7 7 7 7 7 7 7 .
    . . 7 7 7 7 7 7 7 7 7 7 2 7 7 .
    . 7 7 2 7 7 7 7 7 2 7 7 7 7 . .
    . 7 7 7 7 7 7 7 7 7 7 7 7 7 . .
    . 7 7 7 7 7 7 7 7 7 7 7 7 . . .
    . 7 7 7 7 2 7 7 7 7 7 7 7 . . .
    . . 7 7 7 7 7 7 7 2 7 7 . . . .
    . . . . . e e 7 7 7 7 e . . . .
    7 7 . . . e 4 e e 7 7 e . . . .
    7 2 7 . . e 4 e 4 e e e . . . .
    . 7 7 e e e 4 e 4 e 4 e . . . .
    . . . . e e 4 e e e e e . . . .
`, false, false, true, 10, 0, new LootTable(1, [new Item(1, 4), new Item(2, 4)]), new Interaction()))
NewTileType(9, new TileType(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . 7 7 7 7 7 . . . . . . .
    . . . 7 7 7 7 7 7 7 7 7 . . . .
    . . . 7 7 7 7 7 7 7 7 7 7 . . .
    . . . 7 7 7 7 7 7 7 7 7 7 . . .
    . . . 7 7 e 7 7 7 7 7 7 7 . . .
    . . . 7 7 7 e 7 7 e 7 7 7 . . .
    . . . . 7 7 e 7 e 7 7 7 7 . . .
    . . . . . . e e 7 7 7 7 . . . .
    . . . . . . e . . . . . . . . .
    . . . . . . e . . . . . . . . .
    . . . . . . e . . . . . . . . .
    . . . . . . e . . . . . . . . .
    . . . . . e e . . . . . . . . .
`, false, false, true, 10, 0, new LootTable(1, [new Item(1, 4)]), new Interaction()))
NewTileType(10, new TileType(img`
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
`, true, false, false, null, 0, new LootTable(0, [new Item(0, 0)]), new Interaction()))
NewTileType(11, new TileType(img`
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
`, false, false, false, null, 0, new LootTable(0, [new Item(0, 0)]), new Interaction()))
NewTileType(12, new TileType(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
`, false, false, false, null, 0, new LootTable(0, [new Item(0, 0)]), new Interaction()))
NewTileType(13, new TileType(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
`, false, false, false, null, 0, new LootTable(0, [new Item(0, 0)]), new Interaction()))
NewTileType(14, new TileType(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
`, false, false, false, null, 0, new LootTable(0, [new Item(0, 0)]), new Interaction()))
NewTileType(15, new TileType(img`
    c c c c c c c c c c c c c c c c
    c d d d b b b b b d d d d d d c
    c d d b d d b d d b b b b b b c
    c d d b d d b d d b b d d d b c
    c d d b d d b d d b b d d d b c
    c d d b d b b b b b b b d d b c
    c b b b b b d d d b b b b b b c
    c d d d b b b b b d d d b d d c
    c b b b b b d d d d d d b d d c
    c d d d b d b d d d b b b b b c
    c d d d b d b d d b d d b d d c
    c d d d b d b d d b d d b d d c
    c d d d b d b d d b d d b d d c
    c d d d d b b b b b b b d d d c
    c b b b b b d d d b d d d d d c
    c c c c c c c c c c c c c c c c
`, true, true, false, 70, 2, new LootTable(1, [new Item(1, 1)]), new Interaction()))
NewTileType(16, new TileType(img`
    e e e e e e e e 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 e e e e e e e e
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    e e e e e e e e 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 e e e e e e e e
    e e e 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 e e e e e e e e 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 e e e e e
    e e e e 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 e e e e e e e e 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 e e e e
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    e e e e e e e e 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 e e e e e e e e
    4 e e e e 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
`, true, true, false, 20, 1, new LootTable(1, [new Item(1, 3)]), new Interaction()))
NewTileType(17, new TileType(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . e e . . . . . . .
    . . . . . . e 4 4 e . . . . . .
    . . . . . . e 4 4 e . . . . . .
    . . . . . e e e e e e . . . . .
    . . . . e 4 4 e e 4 4 e . . . .
    . . . . e 4 4 e e 4 4 e . . . .
    . . . e e e e e e e e e e . . .
    . . e 4 4 e e 4 4 e e 4 4 e . .
    . . e 4 4 e e 4 4 e e 4 4 e . .
    . e e e e e e e e e e e e e e .
    e 4 4 e e 4 4 e e 4 4 e e 4 4 e
    e 4 4 e e 4 4 e e 4 4 e e 4 4 e
    . e e . . e e . . e e . . e e .
`, false, false, true, 25, 0, new LootTable(1, [new Item(1, 2)]), new Interaction()))
NewTileType(18, new TileType(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . 4 . 4 . . 7 . . . . . 4 . 7
    . 7 . . 4 . 7 . . 7 . . 7 . 7 .
    . 7 . . 7 . 7 . . . 7 . 7 . 7 .
    . 7 . . 7 . 7 . . . 7 . 7 . 7 .
`, false, false, true, 2, 0, new LootTable(1, [new Item(1, 5)]), new Interaction()))
NewTileType(19, new TileType(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . 5 . . . . . . . . . . . . .
    . 4 . . . . . 5 . . . . . . . 5
    . 4 . . . . . 4 . 5 . 5 . . . 4
    . 7 . 5 . . . 4 . 4 . . 4 . . 4
    . 7 . . 4 . . 7 . 4 . . 4 . . 7
    . 7 . . 4 . . 7 . 7 . . 7 . . 7
    . 7 . . 7 . 7 . . 7 . . 7 . 7 .
    . 7 . . 7 . 7 . . . 7 . 7 . 7 .
    . 7 . . 7 . 7 . . . 7 . 7 . 7 .
`, false, false, true, 2, 0, new LootTable(2, [new Item(2, 5), new Item(1, 9)]), new Interaction()))
NewTileType(20, new TileType(img`
    . . . . . . . . . . . . . . . .
    . . . 4 4 4 4 4 4 4 4 4 4 . . .
    . . 4 8 d 8 8 8 d 8 8 d 8 4 . .
    . 4 8 d 8 d 8 d d d 8 d 8 8 4 .
    4 8 8 d d 8 8 8 d 8 8 8 d 8 8 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 . . . . . . . . . . . . 4 4
    4 4 . . . . . . . . . . . . 4 4
    4 4 . . . . . . . . . . . . 4 4
    4 4 . . . . . . . . . . . . 4 4
    4 4 . . . . . . . . . . . . 4 4
    4 4 . . . . . . . . . . . . 4 4
    4 4 . . . . . . . . . . . . 4 4
    4 4 . . . . . . . . . . . . 4 4
    4 4 . . . . . . . . . . . . 4 4
    4 4 . . . . . . . . . . . . 4 4
`, false, true, true, 25, 1, new LootTable(1, [new Item(1, 15)]), new Interaction(true)))
NewTileType(21, new TileType(img`
    e e e e e e e e e e e e e e e e
    e e e e e e e d d e e e e e e e
    e e 4 4 4 4 4 d d 4 4 4 4 4 e e
    e e e e e e e d d e e e e e e e
    e e 4 4 4 4 4 4 4 4 4 4 4 4 e e
    e e 4 4 4 4 4 4 4 4 4 4 4 4 e e
    e e 4 4 4 4 4 4 4 4 4 4 4 4 e e
    e e 4 4 4 4 4 4 4 4 4 4 4 4 e e
    e e 4 4 4 4 4 4 4 4 4 4 4 4 e e
    e e 4 4 4 4 4 4 4 4 4 4 4 4 e e
    e e 4 4 4 4 4 4 4 4 4 4 4 4 e e
    e e 4 4 4 4 4 4 4 4 4 4 4 4 e e
    e e 4 4 4 4 4 4 4 4 4 4 4 4 e e
    e e 4 4 4 4 4 4 4 4 4 4 4 4 e e
    e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e
`, false, true, true, 25, 1, new LootTable(1, [new Item(1, 16)]), new Interaction(true, 6)))
NewParticleType(0, new ParticleType([img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . f f . . . . . . . . . .
    . . . . . f f . . . . . . . . .
    . . . . . . f . . . . . . f . .
    . . . . . . . f . . . f f f . .
    . . . . . . . f f f f . . . . .
    . . . . . . f f f . . . . . . .
    . . . . . f f . f . . . . . . .
    . . . . . . . . f f . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, img`
    . . . . . . . . . . . . . . . .
    . . . f f . . . . . . . . . . .
    . . . . f . . . . . f f . . . .
    . . . . f f . . . . f . . . . .
    . . . . . f f . . f f . . . . .
    . . . . . . f . . f . . . f . .
    . . . . . f f f f f . f f f . .
    . . f f f . . f f f f . . . . .
    . . . . . . f f f . . . . . . .
    . . . . . f f . f . . . . . . .
    . . f f f f . . f f . . . . . .
    . . f . . . . . . f f . . . . .
    . . . . . . . . . . f f . . . .
    . . . . . . . . . . . f f . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, img`
    f f . . . . . . . . . f . . . .
    . f f f f . . . . . f f . . . .
    . . . . f . . . . . f f . . . .
    . . . . f f . . . . f . . . . .
    . . . . . f f . . f f . . . f f
    . . . . . . f . . f . . . f f .
    f f . . . f f f f f . f f f . .
    . f f f f . . f f f f . . . . .
    . . . . . . f f f . . . . . . .
    . . . . . f f . f . . . . . . .
    . . f f f f . . f f . . . . . .
    . . f . . . . . . f f . . . . .
    . . f . . . . . f f f f . . . .
    . f f . . . . . f . . f f f f .
    . f . . . . . f f . . . . . f f
    . f . . . . . f . . . . . . . .
`]))
NewItemType(0, new ItemType("Dirt", img`
    . . . e e e . . .
    . e e 4 4 4 e e .
    e 4 4 4 4 4 4 4 e
    e e e 4 4 4 e e e
    e 4 4 e e e 4 4 e
    e 4 4 4 e 4 4 4 e
    e 4 4 4 e 4 4 4 e
    . e e 4 e 4 e e .
    . . . e e e . . .
`, 0, 64, 1, 1))
NewItemType(1, new ItemType("Cobblestone", img`
    . . . c c c . . .
    . c c b b d c c .
    c d d d b b d d c
    c c c b b d c c c
    c d b c c c b d c
    c b b d c d b b c
    c b d b c b d d c
    . c c d c d c c .
    . . . c c c . . .
`, 0, 64, 1, 15))
NewItemType(2, new ItemType("Logs", img`
    . . . . . . . . .
    . . . . . e e e .
    . . . . e e e e .
    . . . e e e e e .
    . . e e e e e . .
    . e e e e e . . .
    . e e e e . . . .
    . e e e . . . . .
    . . . . . . . . .
`, 0, 64, 1, 17))
NewItemType(3, new ItemType("Planks", img`
    . . . . . . . . .
    . . . . . 4 4 4 .
    . . . . 4 4 4 4 .
    . . . 4 4 4 4 4 .
    . . 4 4 4 4 4 . .
    . 4 4 4 4 4 . . .
    . 4 4 4 4 . . . .
    . 4 4 4 . . . . .
    . . . . . . . . .
`, 0, 64, 1, 16))
NewItemType(4, new ItemType("Sapling", img`
    . . . . . . . . .
    . . . . 7 7 7 . .
    . . 7 7 7 7 7 7 .
    . . 7 7 7 7 7 7 .
    . . 7 7 7 7 7 7 .
    . . . . e 7 7 7 .
    . . . . e . . . .
    . . . e . . . . .
    . . . e . . . . .
`, 0, 64, 1, 9))
NewItemType(5, new ItemType("Seeds", img`
    . . . . . . . . .
    . . 7 . . . . . .
    . . e . . 7 e . .
    e 7 . . . . . . .
    . . . . 7 e . 7 .
    . . . . . . . e .
    . . 7 . . e . . .
    . . e . . 7 . . .
    . . . . . . . . .
`, 0, 64, 1, 18))
NewItemType(6, new ItemType("Sand", img`
    . . . 4 4 4 . . .
    . 4 4 5 5 5 4 4 .
    4 5 5 5 5 5 5 5 4
    4 4 4 5 5 5 4 4 4
    4 5 5 4 4 4 5 5 4
    4 5 5 5 4 5 5 5 4
    4 5 5 5 4 5 5 5 4
    . 4 4 5 4 5 4 4 .
    . . . 4 4 4 . . .
`, 0, 64, 1, 5))
NewItemType(7, new ItemType("Gravel", img`
    . . . b b b . . .
    . b b d b d b b .
    b c e c d d e f b
    b b b f e f b b b
    b e f b b b c d b
    b d c e b e d b b
    b c e c b f c d b
    . b b d b e b b .
    . . . b b b . . .
`, 0, 64, 1, 6))
NewItemType(8, new ItemType("Flint", img`
    . . . . . . . . .
    . . . . . 1 . . .
    . . . . d d . . .
    . . . b c c c . .
    . . b c f f f . .
    . b c f f f f f .
    . b c f f f f f .
    . . f f f f f . .
    . . . f f f . . .
`, 0, 64, 1, null))
NewItemType(9, new ItemType("Wheat", img`
    . . . . . . . . .
    . . . . . . 5 . .
    . . . . . 4 . 4 5
    . . . . 2 7 4 4 5
    e 7 7 7 2 . . . .
    . 7 7 7 . . . . .
    e . 7 . . . . . .
    . . e . . . . . .
    . . . . . . . . .
`, 0, 64, 1, null))
NewItemType(10, new ItemType("Bread", img`
    . . . e e e e e .
    . . e e e e e e e
    . e e e e e e e e
    e 4 4 4 4 4 e e e
    e 4 4 4 4 4 e e e
    . e 4 4 4 e e e e
    . e 4 4 4 e e e .
    . e 4 4 4 e e . .
    . e e e e e . . .
`, 0, 64, 1, null))
NewItemType(11, new ItemType("Stick", img`
    . . . . . . . . e
    . . . . . . . e .
    . . . . . . e . .
    . . . . . e . . .
    . . . . e . . . .
    . . . e . . . . .
    . . e . . . . . .
    . e . . . . . . .
    e . . . . . . . .
`, 0, 64, 1, null))
NewItemType(12, new ItemType("Wooden Pick", img`
    . . . e e e . . .
    . . . . . . e . .
    . . . . . . e e .
    . . . . . e . . e
    . . . . e . . . e
    . . . e . . . . e
    . . e . . . . . .
    . e . . . . . . .
    e . . . . . . . .
`, 2, 1, 1, null))
NewItemType(13, new ItemType("Wooden Axe", img`
    . . . . . . . . .
    . . . . . . e e .
    . . . . . e e e e
    . . . . e e e e e
    . . . . e e e e e
    . . . e . e e e e
    . . e . . . . . .
    . e . . . . . . .
    e . . . . . . . .
`, 1, 1, 1, null))
NewItemType(14, new ItemType("Wooden Shovel", img`
    . . . . . . . . .
    . . . . . . e e .
    . . . . . e e e .
    . . . . . e e . .
    . . . . e . . . .
    . . . e . . . . .
    . . e . . . . . .
    . e . . . . . . .
    e . . . . . . . .
`, 3, 1, 1, null))
NewItemType(15, new ItemType("WorkBench", img`
    . . . e e e . . .
    . e e 4 4 4 e e .
    e 4 4 4 4 4 4 4 e
    e e e 4 4 4 e e e
    e . . e e e . . e
    e . . . e . . . e
    e . . . e . . . e
    . . . . e . . . .
    . . . . e . . . .
`, 0, 1, 1, 20))
NewItemType(16, new ItemType("Wooden Chest", img`
    . . . e e e . . .
    . e e 4 4 4 e e .
    e 4 4 4 4 4 4 4 e
    e e d d 4 4 e e e
    e 4 d e e e 4 4 e
    e 4 4 4 e 4 4 4 e
    e 4 4 4 e 4 4 4 e
    . e e 4 e 4 e e .
    . . . e e e . . .
`, 0, 1, 1, 21))
NewItemType(17, new ItemType("Stone Pick", img`
    . . . b b b . . .
    . . . . . . b . .
    . . . . . . e b .
    . . . . . e . . b
    . . . . e . . . b
    . . . e . . . . b
    . . e . . . . . .
    . e . . . . . . .
    e . . . . . . . .
`, 2, 1, 2, null))
NewItemType(18, new ItemType("Stone Axe", img`
    . . . . . . . . .
    . . . . . . b e .
    . . . . . b b b b
    . . . . b b b b b
    . . . . e b b b b
    . . . e . b b b b
    . . e . . . . . .
    . e . . . . . . .
    e . . . . . . . .
`, 1, 1, 2, null))
NewItemType(19, new ItemType("Stone Shovel", img`
    . . . . . . . . .
    . . . . . . b b .
    . . . . . b b b .
    . . . . . b b . .
    . . . . e . . . .
    . . . e . . . . .
    . . e . . . . . .
    . e . . . . . . .
    e . . . . . . . .
`, 3, 1, 2, null))
NewRecipe(new Recipe([new Item(1, 2), null, null, null, null, null, null, null, null], new Item(4, 3), [-1]))
NewRecipe(new Recipe([new Item(1, 3), null, null, new Item(1, 3), null, null, null, null, null], new Item(4, 11), [-1]))
NewRecipe(new Recipe([new Item(1, 3), new Item(1, 3), null, new Item(1, 3), new Item(1, 3), null, null, null, null], new Item(1, 15), [-1]))
NewRecipe(new Recipe([new Item(1, 3), new Item(1, 3), new Item(1, 3), new Item(1, 3), null, new Item(1, 3), new Item(1, 3), new Item(1, 3), new Item(1, 3)], new Item(1, 16), [20]))
NewRecipe(new Recipe([new Item(1, 3), new Item(1, 3), new Item(1, 3), null, new Item(1, 11), null, null, new Item(1, 11), null], new Item(1, 12), [20]))
NewRecipe(new Recipe([new Item(1, 3), new Item(1, 3), null, new Item(1, 3), new Item(1, 11), null, null, new Item(1, 11), null], new Item(1, 13), [20]))
NewRecipe(new Recipe([null, new Item(1, 3), null, null, new Item(1, 11), null, null, new Item(1, 11), null], new Item(1, 14), [20]))
NewRecipe(new Recipe([new Item(1, 1), new Item(1, 1), new Item(1, 1), null, new Item(1, 11), null, null, new Item(1, 11), null], new Item(1, 17), [20]))
NewRecipe(new Recipe([new Item(1, 1), new Item(1, 1), null, new Item(1, 1), new Item(1, 11), null, null, new Item(1, 11), null], new Item(1, 18), [20]))
NewRecipe(new Recipe([null, new Item(1, 1), null, null, new Item(1, 11), null, null, new Item(1, 11), null], new Item(1, 19), [20]))
/**NewItem(new Item(1, 17))
NewItem(new Item(1, 18))
NewItem(new Item(1, 19))
NewItem(new Item(1, 16))
NewItem(new Item(12, 15))/**/


GenerateWorld()
game.onUpdateInterval(50, function() {
    SetupRenderer()
    Update()
    Update()
    if (Breaking != null) {
        if (Breaking.Pos.Distance(new Position(GetPlayer().Pos.X / 16, GetPlayer().Pos.Y / 16)) > 2) {
            Breaking = null
            GetParticles(0)[0].Active = false
        }
        if (controller.A.isPressed() == false) {
            Breaking = null
            GetParticles(0)[0].Active = false
        }
    }
    let TileAtHead = GetTileAt(new Position(Math.floor((GetPlayer().Pos.X + (EntityTypes[0][GetPlayer().ID].Texture.width / 2)) / 16), Math.floor((GetPlayer().Pos.Y) / 16)))
    // Drowning / Inside block
})
function GetParticles (ID: number) {
    let StoredParticles: Particle[] = []
    for (let i = 0; i < Particles.length; i++) {
        if (Particles[i].ID == ID) {
            StoredParticles.push(Particles[i])
        }
    }
    return(StoredParticles)
}
controller.setRepeatDefault(0, 30)
controller.A.onEvent(ControllerButtonEvent.Repeated, function() {
    let Player = GetPlayer()
    if (InInventory == false) {
        let Tool = new ItemType("", img``, 0, 1, 1, null)
        if (Items[HighlightedItem] != null) {
            Tool = ItemTypes[Items[HighlightedItem].ID]
        }
        if (Breaking != null) {
            if (Breaking.Pos.Distance(new Position(Player.Pos.X / 16, Player.Pos.Y / 16)) <= 2 && PlayerDir == SavedPlayerDir && GetTileAt(Breaking.Pos).Active) {
                if (Breaking.Damage(Tool.ToolDamage, Tool.Type) == false) {
                    let Percent = 1 - (Breaking.Health / TileTypes[Breaking.ID].Health)
                    Percent *= ParticleTypes[0].Texture.length
                    GetParticles(0)[0].SetFrame(Math.floor(Percent))
                } else {
                    Breaking.Health = null
                    Breaking = null
                    GetParticles(0)[0].Active = false
                }
            } else {
                Breaking.Health = TileTypes[Breaking.ID].Health
                Breaking = null
                GetParticles(0)[0].Active = false
            }
        } else {
            let bTile = null
            if (PlayerDir == 0) {
                bTile = GetTileAt(new Position(Math.floor((Player.Pos.X / 16) + 0 + (EntityTypes[0][Player.ID].Texture.width / 32)), Math.floor((Player.Pos.Y / 16) + -1 + (EntityTypes[0][Player.ID].Texture.height / 32))))
            } else if (PlayerDir == 2) {
                bTile = GetTileAt(new Position(Math.floor((Player.Pos.X / 16) + 1 + (EntityTypes[0][Player.ID].Texture.width / 32)), Math.floor((Player.Pos.Y / 16) + 0 + (EntityTypes[0][Player.ID].Texture.height / 32))))
            } else if (PlayerDir == 4) {
                bTile = GetTileAt(new Position(Math.floor((Player.Pos.X / 16) + 0 + (EntityTypes[0][Player.ID].Texture.width / 32)), Math.floor((Player.Pos.Y / 16) + 1 + (EntityTypes[0][Player.ID].Texture.height / 32))))
            } else if (PlayerDir == 6) {
                bTile = GetTileAt(new Position(Math.floor((Player.Pos.X / 16) + -1 + (EntityTypes[0][Player.ID].Texture.width / 32)), Math.floor((Player.Pos.Y / 16) + 0 + (EntityTypes[0][Player.ID].Texture.height / 32))))
            } else if (PlayerDir == 1) {
                bTile = GetTileAt(new Position(Math.floor((Player.Pos.X / 16) + 1 + (EntityTypes[0][Player.ID].Texture.width / 32)), Math.floor((Player.Pos.Y / 16) + -1 + (EntityTypes[0][Player.ID].Texture.height / 32))))
            } else if (PlayerDir == 3) {
                bTile = GetTileAt(new Position(Math.floor((Player.Pos.X / 16) + 1 + (EntityTypes[0][Player.ID].Texture.width / 32)), Math.floor((Player.Pos.Y / 16) + 1 + (EntityTypes[0][Player.ID].Texture.height / 32))))
            } else if (PlayerDir == 5) {
                bTile = GetTileAt(new Position(Math.floor((Player.Pos.X / 16) + -1 + (EntityTypes[0][Player.ID].Texture.width / 32)), Math.floor((Player.Pos.Y / 16) + 1 + (EntityTypes[0][Player.ID].Texture.height / 32))))
            } else {
                bTile = GetTileAt(new Position(Math.floor((Player.Pos.X / 16) + -1 + (EntityTypes[0][Player.ID].Texture.width / 32)), Math.floor((Player.Pos.Y / 16) + -1 + (EntityTypes[0][Player.ID].Texture.height / 32))))
            }
            if (bTile.Active == false) {
                bTile = GetTileAt(new Position(Math.floor((Player.Pos.X / 16) + 0 + (EntityTypes[0][Player.ID].Texture.width / 32)), Math.floor((Player.Pos.Y / 16) + 0 + (EntityTypes[0][Player.ID].Texture.height / 32))))
            }
            if (bTile.Active && bTile.Health != null) {
                SavedPlayerDir = PlayerDir
                Breaking = bTile
                NewParticle(new Particle(new Position(bTile.Pos.X * 16, bTile.Pos.Y * 16), 0))
            }
        }
    }
})
controller.B.onEvent(ControllerButtonEvent.Released, function() {
    let Player = GetPlayer()
    if (InInventory == false) {
        if (TileTypes[(GetTileAt(new Position(Math.floor(Player.Pos.X / 16), Math.floor(Player.Pos.Y / 16))).ID)].Interact.IsInteractable) {
            InInventory = true
            UsingStation = (GetTileAt(new Position(Math.floor(Player.Pos.X / 16), Math.floor(Player.Pos.Y / 16))).ID)
        } else  {
            if (Items[HighlightedItem] != null && Items[HighlightedItem].Active && ItemTypes[Items[HighlightedItem].ID].CanBePlaced) {
                let bTile = null
                if (PlayerDir == 0) {
                    bTile = GetTileAt(new Position(Math.floor((Player.Pos.X / 16) + 0 + (EntityTypes[0][Player.ID].Texture.width / 32)), Math.floor((Player.Pos.Y / 16) + -1 + (EntityTypes[0][Player.ID].Texture.height / 32))))
                } else if (PlayerDir == 2) {
                    bTile = GetTileAt(new Position(Math.floor((Player.Pos.X / 16) + 1 + (EntityTypes[0][Player.ID].Texture.width / 32)), Math.floor((Player.Pos.Y / 16) + 0 + (EntityTypes[0][Player.ID].Texture.height / 32))))
                } else if (PlayerDir == 4) {
                    bTile = GetTileAt(new Position(Math.floor((Player.Pos.X / 16) + 0 + (EntityTypes[0][Player.ID].Texture.width / 32)), Math.floor((Player.Pos.Y / 16) + 1 + (EntityTypes[0][Player.ID].Texture.height / 32))))
                } else if (PlayerDir == 6) {
                    bTile = GetTileAt(new Position(Math.floor((Player.Pos.X / 16) + -1 + (EntityTypes[0][Player.ID].Texture.width / 32)), Math.floor((Player.Pos.Y / 16) + 0 + (EntityTypes[0][Player.ID].Texture.height / 32))))
                }
                if (bTile.Active) {
                    bTile = GetTileAt(new Position(Math.floor((Player.Pos.X / 16) + 0 + (EntityTypes[0][Player.ID].Texture.width / 32)), Math.floor((Player.Pos.Y / 16) + 0 + (EntityTypes[0][Player.ID].Texture.height / 32))))
                }
                if (bTile.Active == false) {
                    NewTile(new Tile(bTile.Pos, ItemTypes[Items[HighlightedItem].ID].PlaceID))
                    Items[HighlightedItem].Count -= 1
                    if (Items[HighlightedItem].Count <= 0) {
                        Items[HighlightedItem].Delete()
                    }
                }
            }
        }
    } else if (DraggingItem != null) {
        DraggingItem = null
    } else {
        InInventory = false
        UsingStation = 0
        if (HighlightedItem >= (Items.length / 4)) {
            HighlightedItem = 0
        }
    }
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function() {
    let Player = GetPlayer()
    if (InInventory == false) {
        InInventory = true
        UsingStation = -1
    } else {
        let Recipe = GetRecipe()
        if (Recipe != null) {
            for (let i = 0; i < CraftingItems.length; i++) {
                if (CraftingItems[i] != null) {
                    CraftingItems[i].Count -= Recipes[Recipe].Recipe[i].Count
                    if (CraftingItems[i].Count <= 0) {
                        CraftingItems[i].Delete()
                    }
                }
            }
            NewItem(new Item(Recipes[Recipe].Output.Count, Recipes[Recipe].Output.ID))
        }
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function() {
    let Player = GetPlayer()
    if (InInventory == false) {
        if (controller.left.isPressed()) {
            PlayerDir = 7
        } else if (controller.right.isPressed()) {
            PlayerDir = 1
        } else {
            PlayerDir = 0
        }
        EntityTypes[0][(Player.ID)].Texture = img`
            . . . . . . f f f f . . . . . .
            . . . . f f f 2 2 f f f . . . .
            . . . f f f 2 2 2 2 f f f . . .
            . . f f f e e e e e e f f f . .
            . . f f e 2 2 2 2 2 2 e e f . .
            . . f e 2 f f f f f f 2 e f . .
            . . f f f f e e e e f f f f . .
            . f f e f b f 4 4 f b f e f f .
            . f e e 4 b f d d f b 4 e e f .
            . . f e e 1 1 d d 1 1 e e f . .
            . . . f e e 4 4 4 4 e e f . . .
            . . e 4 f 2 2 2 2 2 2 f 4 e . .
            . . 4 d f 2 2 2 2 2 2 f d 4 . .
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . .
            . . . . . f f f f f f . . . . .
            . . . . . f f . . f f . . . . .
        `
        let TileAtFeet = GetTileAt(new Position(Math.floor((Player.Pos.X + (EntityTypes[0][Player.ID].Texture.width / 2)) / 16), Math.floor((Player.Pos.Y + (EntityTypes[0][Player.ID].Texture.height - 1)) / 16)))
        if ((Player.IsOnGround || ((TileAtFeet.ID == 4 || TileAtFeet.ID == 11 || TileAtFeet.ID == 12) && TileAtFeet.Active)) && controller.A.isPressed() == false ) {
            Player.Velocity.Y = -4.5
        }
    } else if (InInventory && HighlightedItem - Items.length < (CraftingItems.length / 3) && HighlightedItem - Items.length >= 0) {
        HighlightedItem -= (Items.length / 4) - 2
    } else if (InInventory && HighlightedItem >= (CraftingItems.length / 3) && HighlightedItem - Items.length >= 0) {
        HighlightedItem -= CraftingItems.length / 3
    } else if (InInventory && HighlightedItem >= (Items.length / 4) &&  HighlightedItem <= Items.length) {
        HighlightedItem -= (Items.length / 4)
    } else if (InInventory && (HighlightedItem >= Items.length + CraftingItems.length + 4) && (HighlightedItem <= Items.length + CraftingItems.length + TileTypes[UsingStation].Interact.Storage - 3)) {
        HighlightedItem -= 5
    }
})
controller.right.onEvent(ControllerButtonEvent.Repeated, function() {
    let Player = GetPlayer()
    if (InInventory == false && controller.B.isPressed() == false) {
        if (controller.up.isPressed()) {
            PlayerDir = 1
        EntityTypes[0][(Player.ID)].Texture = img`
            . . . . . . f f f f . . . . . .
            . . . . f f f 2 2 f f f . . . .
            . . . f f f 2 2 2 2 f f f . . .
            . . f f f e e e e e e f f f . .
            . . f f e 2 2 2 2 2 2 e e f . .
            . . f e 2 f f f f f f 2 e f . .
            . . f f f f e e e e f f f f . .
            . f f e f b f 4 4 f b f e f f .
            . f e e 4 b f d d f b 4 e e f .
            . . f e e 1 1 d d 1 1 e e f . .
            . . . f e e 4 4 4 4 e e f . . .
            . . e 4 f 2 2 2 2 2 2 f 4 e . .
            . . 4 d f 2 2 2 2 2 2 f d 4 . .
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . .
            . . . . . f f f f f f . . . . .
            . . . . . f f . . f f . . . . .
        `
        } else if (controller.down.isPressed()) {
            PlayerDir = 3
        EntityTypes[0][(Player.ID)].Texture = img`
            . . . . . . f f f f . . . . . .
            . . . . f f f 2 2 f f f . . . .
            . . . f f f 2 2 2 2 f f f . . .
            . . f f f e e e e e e f f f . .
            . . f f e 2 2 2 2 2 2 e e f . .
            . . f e 2 f f f f f f 2 e f . .
            . . f f f f e e e e f f f f . .
            . f f e f 4 4 4 4 4 4 f e f f .
            . f e e 4 b f d d f b 4 e e f .
            . . f e e 1 f d d f 1 e e f . .
            . . . f e e 4 4 4 4 e e f . . .
            . . e 4 f 2 2 2 2 2 2 f 4 e . .
            . . 4 d f 2 2 2 2 2 2 f d 4 . .
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . .
            . . . . . f f f f f f . . . . .
            . . . . . f f . . f f . . . . .
        `
        } else {
            PlayerDir = 2
            EntityTypes[0][(Player.ID)].Texture = img`
                . . . . . . . . . . . . . . . .
                . . . . . f f f f f f . . . . .
                . . . f f e e e e f 2 f . . . .
                . . f f e e e e f 2 2 2 f . . .
                . . f e e e f f e e e e f . . .
                . . f f f f e e 2 2 2 2 e f . .
                . . f e 2 2 2 f f f f e 2 f . .
                . f f f f f f f e e e f f f . .
                . f f e 4 4 e b f 4 4 e e f . .
                . f e e 4 d 4 1 f d d e f . . .
                . . f e e e e e d d d f . . . .
                . . . . f 4 d d e 4 e f . . . .
                . . . . f e d d e 2 2 f . . . .
                . . . f f f e e f 5 5 f f . . .
                . . . f f f f f f f f f f . . .
                . . . . f f . . . f f f . . . .
            `
        }
        if (controller.A.isPressed() == false) {
            Player.Velocity.X = Math.clamp(-2.5, 2.5, Player.Velocity.X + 1)
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Repeated, function() {
    let Player = GetPlayer()
    if (InInventory == false && controller.B.isPressed() == false) {
        if (controller.up.isPressed()) {
            PlayerDir = 7
            EntityTypes[0][(Player.ID)].Texture = img`
            . . . . . . f f f f . . . . . .
            . . . . f f f 2 2 f f f . . . .
            . . . f f f 2 2 2 2 f f f . . .
            . . f f f e e e e e e f f f . .
            . . f f e 2 2 2 2 2 2 e e f . .
            . . f e 2 f f f f f f 2 e f . .
            . . f f f f e e e e f f f f . .
            . f f e f b f 4 4 f b f e f f .
            . f e e 4 b f d d f b 4 e e f .
            . . f e e 1 1 d d 1 1 e e f . .
            . . . f e e 4 4 4 4 e e f . . .
            . . e 4 f 2 2 2 2 2 2 f 4 e . .
            . . 4 d f 2 2 2 2 2 2 f d 4 . .
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . .
            . . . . . f f f f f f . . . . .
            . . . . . f f . . f f . . . . .
        `
        } else if (controller.down.isPressed()) {
            PlayerDir = 5
        EntityTypes[0][(Player.ID)].Texture = img`
            . . . . . . f f f f . . . . . .
            . . . . f f f 2 2 f f f . . . .
            . . . f f f 2 2 2 2 f f f . . .
            . . f f f e e e e e e f f f . .
            . . f f e 2 2 2 2 2 2 e e f . .
            . . f e 2 f f f f f f 2 e f . .
            . . f f f f e e e e f f f f . .
            . f f e f 4 4 4 4 4 4 f e f f .
            . f e e 4 b f d d f b 4 e e f .
            . . f e e 1 f d d f 1 e e f . .
            . . . f e e 4 4 4 4 e e f . . .
            . . e 4 f 2 2 2 2 2 2 f 4 e . .
            . . 4 d f 2 2 2 2 2 2 f d 4 . .
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . .
            . . . . . f f f f f f . . . . .
            . . . . . f f . . f f . . . . .
        `
        } else {
            PlayerDir = 6
        EntityTypes[0][(Player.ID)].Texture = img`
            . . . . . . . . . . . . . . . .
            . . . . f f f f f f . . . . . .
            . . . f 2 f e e e e f f . . . .
            . . f 2 2 2 f e e e e f f . . .
            . . f e e e e f f e e e f . . .
            . f e 2 2 2 2 e e f f f f . . .
            . f 2 e f f f f 2 2 2 e f . . .
            . f f f e e e f f f f f f f . .
            . f e e 4 4 f b e 4 4 e f f . .
            . . f e d d f 1 4 d 4 e e f . .
            . . . f d d d e e e e e f . . .
            . . . f e 4 e d d 4 f . . . . .
            . . . f 2 2 e d d e f . . . . .
            . . f f 5 5 f e e f f f . . . .
            . . f f f f f f f f f f . . . .
            . . . f f f . . . f f . . . . .
        `
        }
        if (controller.A.isPressed() == false) {
            Player.Velocity.X = Math.clamp(-2.5, 2.5, Player.Velocity.X - 1)
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function() {
    let Player = GetPlayer()
    if (InInventory == false && controller.B.isPressed()) {
        if (HighlightedItem != 0) {
            HighlightedItem--
        }
    } else if (InInventory && HighlightedItem >= Items.length && (HighlightedItem - Items.length) % (CraftingItems.length / 3) != 0) {
        HighlightedItem--
    } else if (InInventory && HighlightedItem % (Items.length / 4) != 0 && HighlightedItem < Items.length) {
        HighlightedItem--
    } else if ((HighlightedItem >= Items.length + CraftingItems.length - 1) && (HighlightedItem <= Items.length + CraftingItems.length + TileTypes[UsingStation].Interact.Storage - 3)) {
        HighlightedItem--
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function() {
    let Player = GetPlayer()
    if (InInventory == false && controller.B.isPressed()) {
        if (HighlightedItem != (Items.length / 4) - 1) {
            HighlightedItem++
        }
    } else if (InInventory && HighlightedItem >= Items.length && (HighlightedItem - Items.length) % (CraftingItems.length / 3) != (CraftingItems.length / 3) - 1) {
        HighlightedItem++
    } else if (InInventory && HighlightedItem % (Items.length / 4) != (Items.length / 4) - 1 && HighlightedItem < Items.length) {
        HighlightedItem++
    } else if (UsingStation != -1) {
        if ((HighlightedItem >= Items.length + CraftingItems.length - 2) && (HighlightedItem <= Items.length + CraftingItems.length + TileTypes[UsingStation].Interact.Storage - 4)) {
            HighlightedItem++
        }
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function() {
    let Player = GetPlayer()
    if (InInventory && HighlightedItem < (Items.length / 4) * 3) {
        HighlightedItem += (Items.length / 4)
    } else if (InInventory && HighlightedItem - Items.length < ((CraftingItems.length / 3) * 2) && HighlightedItem - Items.length >= 0) {
        HighlightedItem += (CraftingItems.length / 3)
    } else if (InInventory && HighlightedItem <= ((Items.length / 4) * 3) + 2) {
        HighlightedItem = Items.length
    } else if (InInventory && HighlightedItem >= ((Items.length / 4) * 3) + 3 && HighlightedItem <= ((Items.length / 4) * 3) + (CraftingItems.length / 3)) {
        HighlightedItem += (Items.length / 4) + (CraftingItems.length / 3) - 5
    } else if (InInventory && HighlightedItem >= ((Items.length / 4) * 3) + (CraftingItems.length / 3) + 1 && HighlightedItem <= Items.length) {
        HighlightedItem = Items.length + (CraftingItems.length / 3) - 1
    } else if (UsingStation != -1) {
        if ((HighlightedItem >= Items.length + CraftingItems.length - 1) && (HighlightedItem <= Items.length + CraftingItems.length + TileTypes[UsingStation].Interact.Storage - 8)) {
            HighlightedItem += 5
        }
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function() {
    let Player = GetPlayer()
    if (InInventory) {
        if (DraggingItem != null && (DraggingItem != HighlightedItem)) {
            if (DraggingItem < Items.length && HighlightedItem < Items.length) {
                if (Items[HighlightedItem] != null && Items[DraggingItem] != null && (Items[HighlightedItem].ID == Items[DraggingItem].ID)) {
                    if (Items[HighlightedItem].Count + DraggingAmount > ItemTypes[Items[DraggingItem].ID].MaxStack) {
                        Items[HighlightedItem].Count = ItemTypes[Items[DraggingItem].ID].MaxStack
                        DraggingAmount -= ItemTypes[Items[DraggingItem].ID].MaxStack - Items[HighlightedItem].Count
                    } else {
                        Items[HighlightedItem].Count += DraggingAmount
                        Items[DraggingItem].Count -= DraggingAmount
                        if (Items[DraggingItem].Count <= 0) {
                            Items[DraggingItem] = null
                        }
                    }
                } else if (Items[HighlightedItem] != null) {
                    let saved = Items[DraggingItem]
                    Items[DraggingItem] = Items[HighlightedItem]
                    Items[HighlightedItem] = saved
                } else {
                    Items[HighlightedItem] = new Item(DraggingAmount, Items[DraggingItem].ID)
                    Items[DraggingItem].Count -= DraggingAmount
                    if (Items[DraggingItem].Count <= 0) {
                        Items[DraggingItem] = null
                    }
                }
                DraggingItem = null
            } else if (DraggingItem >= Items.length && DraggingItem <= CraftingItems.length + Items.length - 1 && HighlightedItem < Items.length) {
                if (Items[HighlightedItem] != null && CraftingItems[DraggingItem - Items.length] != null && (Items[HighlightedItem].ID == CraftingItems[DraggingItem - Items.length].ID)) {
                    if (Items[HighlightedItem].Count + DraggingAmount > ItemTypes[CraftingItems[DraggingItem - Items.length].ID].MaxStack) {
                        Items[HighlightedItem].Count = ItemTypes[CraftingItems[DraggingItem - Items.length].ID].MaxStack
                        DraggingAmount -= ItemTypes[CraftingItems[DraggingItem - Items.length].ID].MaxStack - Items[HighlightedItem].Count
                    } else {
                        Items[HighlightedItem].Count += DraggingAmount
                        CraftingItems[DraggingItem - Items.length].Count -= DraggingAmount
                        if (CraftingItems[DraggingItem - Items.length].Count <= 0) {
                            CraftingItems[DraggingItem - Items.length] = null
                        }
                    }
                } else if (Items[HighlightedItem] != null) {
                    let saved = CraftingItems[DraggingItem - Items.length]
                    CraftingItems[DraggingItem - Items.length] = Items[HighlightedItem]
                    Items[HighlightedItem] = saved
                } else {
                    Items[HighlightedItem] = new Item(DraggingAmount, CraftingItems[DraggingItem - Items.length].ID)
                    CraftingItems[DraggingItem - Items.length].Count -= DraggingAmount
                    if (CraftingItems[DraggingItem - Items.length].Count <= 0) {
                        CraftingItems[DraggingItem - Items.length] = null
                    }
                }
                DraggingItem = null
            } else if (DraggingItem < Items.length && HighlightedItem >= Items.length && HighlightedItem <= CraftingItems.length + Items.length - 1) {
                if (CraftingItems[HighlightedItem - Items.length] != null && Items[DraggingItem] != null && (CraftingItems[HighlightedItem - Items.length].ID == Items[DraggingItem].ID)) {
                    if (CraftingItems[HighlightedItem - Items.length].Count + DraggingAmount > ItemTypes[Items[DraggingItem].ID].MaxStack) {
                        CraftingItems[HighlightedItem - Items.length].Count = ItemTypes[Items[DraggingItem].ID].MaxStack
                        DraggingAmount -= ItemTypes[Items[DraggingItem].ID].MaxStack - CraftingItems[HighlightedItem - Items.length].Count
                    } else {
                        CraftingItems[HighlightedItem - Items.length].Count += DraggingAmount
                        Items[DraggingItem].Count -= DraggingAmount
                        if (Items[DraggingItem].Count <= 0) {
                            Items[DraggingItem] = null
                        }
                    }
                } else if (CraftingItems[HighlightedItem - Items.length] != null) {
                    let saved = Items[DraggingItem]
                    Items[DraggingItem] = CraftingItems[HighlightedItem - Items.length]
                    CraftingItems[HighlightedItem - Items.length] = saved
                } else {
                    CraftingItems[HighlightedItem - Items.length] = new Item(DraggingAmount, Items[DraggingItem].ID)
                    Items[DraggingItem].Count -= DraggingAmount
                    if (Items[DraggingItem].Count <= 0) {
                        Items[DraggingItem] = null
                    }
                }
                DraggingItem = null
            } else if (DraggingItem >= Items.length && DraggingItem <= CraftingItems.length + Items.length - 1 && HighlightedItem >= Items.length && HighlightedItem <= CraftingItems.length + Items.length - 1) {
                if (CraftingItems[HighlightedItem - Items.length] != null && CraftingItems[DraggingItem - Items.length] != null && (CraftingItems[HighlightedItem - Items.length].ID == CraftingItems[DraggingItem - Items.length].ID)) {
                    if (CraftingItems[HighlightedItem - Items.length].Count + DraggingAmount > ItemTypes[CraftingItems[DraggingItem - Items.length].ID].MaxStack) {
                        CraftingItems[HighlightedItem - Items.length].Count = ItemTypes[CraftingItems[DraggingItem - Items.length].ID].MaxStack
                        DraggingAmount -= ItemTypes[CraftingItems[DraggingItem - Items.length].ID].MaxStack - CraftingItems[HighlightedItem - Items.length].Count
                    } else {
                        CraftingItems[HighlightedItem - Items.length].Count += DraggingAmount
                        CraftingItems[DraggingItem - Items.length].Count -= DraggingAmount
                        if (CraftingItems[DraggingItem - Items.length].Count <= 0) {
                            CraftingItems[DraggingItem - Items.length] = null
                        }
                    }
                } else if (CraftingItems[HighlightedItem - Items.length] != null) {
                    let saved = CraftingItems[DraggingItem - Items.length]
                    CraftingItems[DraggingItem - Items.length] = CraftingItems[HighlightedItem - Items.length]
                    CraftingItems[HighlightedItem - Items.length] = saved
                } else {
                    CraftingItems[HighlightedItem - Items.length] = new Item(DraggingAmount, CraftingItems[DraggingItem - Items.length].ID)
                    CraftingItems[DraggingItem - Items.length].Count -= DraggingAmount
                    if (CraftingItems[DraggingItem - Items.length].Count <= 0) {
                        CraftingItems[DraggingItem - Items.length] = null
                    }
                }
                DraggingItem = null
            } else if (DraggingItem >= Items.length && HighlightedItem >= Items.length + CraftingItems.length - 1) {
                if (TileTypes[UsingStation].Interact.Items[HighlightedItem - (Items.length + CraftingItems.length)] != null && TileTypes[UsingStation].Interact.Items[HighlightedItem - (Items.length + CraftingItems.length)] != null && (TileTypes[UsingStation].Interact.Items[HighlightedItem - (Items.length + CraftingItems.length)].ID == Items[DraggingItem].ID)) {
                    if (TileTypes[UsingStation].Interact.Items[HighlightedItem - (Items.length + CraftingItems.length)].Count + DraggingAmount > ItemTypes[Items[DraggingItem].ID].MaxStack) {
                        TileTypes[UsingStation].Interact.Items[HighlightedItem - (Items.length + CraftingItems.length)].Count = ItemTypes[Items[DraggingItem].ID].MaxStack
                        DraggingAmount -= ItemTypes[Items[DraggingItem].ID].MaxStack - TileTypes[UsingStation].Interact.Items[HighlightedItem - (Items.length + CraftingItems.length)].Count
                    } else {
                        TileTypes[UsingStation].Interact.Items[HighlightedItem - (Items.length + CraftingItems.length)].Count += DraggingAmount
                        Items[DraggingItem].Count -= DraggingAmount
                        if (Items[DraggingItem].Count <= 0) {
                            Items[DraggingItem] = null
                        }
                    }
                } else if (TileTypes[UsingStation].Interact.Items[HighlightedItem - (Items.length + CraftingItems.length)] != null) {
                    let saved = Items[DraggingItem]
                    Items[DraggingItem] = TileTypes[UsingStation].Interact.Items[HighlightedItem - (Items.length + CraftingItems.length)]
                    TileTypes[UsingStation].Interact.Items[HighlightedItem - (Items.length + CraftingItems.length)] = saved
                } else {
                    TileTypes[UsingStation].Interact.Items[HighlightedItem - (Items.length + CraftingItems.length)] = new Item(DraggingAmount, Items[DraggingItem].ID)
                    Items[DraggingItem].Count -= DraggingAmount
                    if (Items[DraggingItem].Count <= 0) {
                        Items[DraggingItem] = null
                    }
                }
                DraggingItem = null
            } else if (DraggingItem >= Items.length && DraggingItem <= CraftingItems.length + Items.length - 1 && HighlightedItem >= Items.length + CraftingItems.length - 1) {
                if (TileTypes[UsingStation].Interact.Items[HighlightedItem - (Items.length + CraftingItems.length)] != null && CraftingItems[DraggingItem - Items.length] != null && (TileTypes[UsingStation].Interact.Items[HighlightedItem - (Items.length + CraftingItems.length)].ID == CraftingItems[DraggingItem - Items.length].ID)) {
                    if (TileTypes[UsingStation].Interact.Items[HighlightedItem - (Items.length + CraftingItems.length)].Count + DraggingAmount > ItemTypes[CraftingItems[DraggingItem - Items.length].ID].MaxStack) {
                        TileTypes[UsingStation].Interact.Items[HighlightedItem - (Items.length + CraftingItems.length)].Count = ItemTypes[CraftingItems[DraggingItem - Items.length].ID].MaxStack
                        DraggingAmount -= ItemTypes[CraftingItems[DraggingItem - Items.length].ID].MaxStack - TileTypes[UsingStation].Interact.Items[HighlightedItem - (Items.length + CraftingItems.length)].Count
                    } else {
                        TileTypes[UsingStation].Interact.Items[HighlightedItem - (Items.length + CraftingItems.length)].Count += DraggingAmount
                        CraftingItems[DraggingItem - Items.length].Count -= DraggingAmount
                        if (CraftingItems[DraggingItem - Items.length].Count <= 0) {
                            CraftingItems[DraggingItem - Items.length] = null
                        }
                    }
                } else if (TileTypes[UsingStation].Interact.Items[HighlightedItem - (Items.length + CraftingItems.length)] != null) {
                    let saved = CraftingItems[DraggingItem - Items.length]
                    CraftingItems[DraggingItem - Items.length] = TileTypes[UsingStation].Interact.Items[HighlightedItem - (Items.length + CraftingItems.length)]
                    TileTypes[UsingStation].Interact.Items[HighlightedItem - (Items.length + CraftingItems.length)] = saved
                } else {
                    TileTypes[UsingStation].Interact.Items[HighlightedItem - (Items.length + CraftingItems.length)] = new Item(DraggingAmount, CraftingItems[DraggingItem - Items.length].ID)
                    CraftingItems[DraggingItem - Items.length].Count -= DraggingAmount
                    if (CraftingItems[DraggingItem - Items.length].Count <= 0) {
                        CraftingItems[DraggingItem - Items.length] = null
                    }
                }
                DraggingItem = null
            } else if (DraggingItem >= Items.length + CraftingItems.length - 1 && HighlightedItem >= Items.length && HighlightedItem <= CraftingItems.length + Items.length - 1) {
                if (CraftingItems[HighlightedItem - Items.length] != null && TileTypes[UsingStation].Interact.Items[DraggingItem - (Items.length + CraftingItems.length)] != null && (CraftingItems[HighlightedItem - Items.length].ID == TileTypes[UsingStation].Interact.Items[DraggingItem - (Items.length + CraftingItems.length)].ID)) {
                    if (CraftingItems[HighlightedItem - Items.length].Count + DraggingAmount > ItemTypes[TileTypes[UsingStation].Interact.Items[DraggingItem - (Items.length + CraftingItems.length)].ID].MaxStack) {
                        CraftingItems[HighlightedItem - Items.length].Count = ItemTypes[TileTypes[UsingStation].Interact.Items[DraggingItem - (Items.length + CraftingItems.length)].ID].MaxStack
                        DraggingAmount -= ItemTypes[TileTypes[UsingStation].Interact.Items[DraggingItem - (Items.length + CraftingItems.length)].ID].MaxStack - CraftingItems[HighlightedItem - Items.length].Count
                    } else {
                        CraftingItems[HighlightedItem - Items.length].Count += DraggingAmount
                        TileTypes[UsingStation].Interact.Items[DraggingItem - (Items.length + CraftingItems.length)].Count -= DraggingAmount
                        if (TileTypes[UsingStation].Interact.Items[DraggingItem - (Items.length + CraftingItems.length)].Count <= 0) {
                            TileTypes[UsingStation].Interact.Items[DraggingItem - (Items.length + CraftingItems.length)] = null
                        }
                    }
                } else if (CraftingItems[HighlightedItem - Items.length] != null) {
                    let saved = TileTypes[UsingStation].Interact.Items[DraggingItem - (Items.length + CraftingItems.length)]
                    TileTypes[UsingStation].Interact.Items[DraggingItem - (Items.length + CraftingItems.length)] = CraftingItems[HighlightedItem - Items.length]
                    CraftingItems[HighlightedItem - Items.length] = saved
                } else {
                    CraftingItems[HighlightedItem - Items.length] = new Item(DraggingAmount, TileTypes[UsingStation].Interact.Items[DraggingItem - (Items.length + CraftingItems.length)].ID)
                    TileTypes[UsingStation].Interact.Items[DraggingItem - (Items.length + CraftingItems.length)].Count -= DraggingAmount
                    if (TileTypes[UsingStation].Interact.Items[DraggingItem - (Items.length + CraftingItems.length)].Count <= 0) {
                        TileTypes[UsingStation].Interact.Items[DraggingItem - (Items.length + CraftingItems.length)] = null
                    }
                }
                DraggingItem = null
            } else if (DraggingItem >= Items.length + CraftingItems.length - 1 && HighlightedItem < Items.length) {
                if (Items[HighlightedItem] != null && TileTypes[UsingStation].Interact.Items[DraggingItem - (Items.length + CraftingItems.length)] != null && (Items[HighlightedItem].ID == TileTypes[UsingStation].Interact.Items[DraggingItem - (Items.length + CraftingItems.length)].ID)) {
                    if (Items[HighlightedItem].Count + DraggingAmount > ItemTypes[TileTypes[UsingStation].Interact.Items[DraggingItem - (Items.length + CraftingItems.length)].ID].MaxStack) {
                        Items[HighlightedItem].Count = ItemTypes[TileTypes[UsingStation].Interact.Items[DraggingItem - (Items.length + CraftingItems.length)].ID].MaxStack
                        DraggingAmount -= ItemTypes[TileTypes[UsingStation].Interact.Items[DraggingItem - (Items.length + CraftingItems.length)].ID].MaxStack - Items[HighlightedItem].Count
                    } else {
                        Items[HighlightedItem].Count += DraggingAmount
                        TileTypes[UsingStation].Interact.Items[DraggingItem - (Items.length + CraftingItems.length)].Count -= DraggingAmount
                        if (TileTypes[UsingStation].Interact.Items[DraggingItem - (Items.length + CraftingItems.length)].Count <= 0) {
                            TileTypes[UsingStation].Interact.Items[DraggingItem - (Items.length + CraftingItems.length)] = null
                        }
                    }
                } else if (Items[HighlightedItem] != null) {
                    let saved = TileTypes[UsingStation].Interact.Items[DraggingItem - (Items.length + CraftingItems.length)]
                    TileTypes[UsingStation].Interact.Items[DraggingItem - (Items.length + CraftingItems.length)] = Items[HighlightedItem]
                    Items[HighlightedItem] = saved
                } else {
                    Items[HighlightedItem] = new Item(DraggingAmount, TileTypes[UsingStation].Interact.Items[DraggingItem - (Items.length + CraftingItems.length)].ID)
                    TileTypes[UsingStation].Interact.Items[DraggingItem - (Items.length + CraftingItems.length)].Count -= DraggingAmount
                    if (TileTypes[UsingStation].Interact.Items[DraggingItem - (Items.length + CraftingItems.length)].Count <= 0) {
                        TileTypes[UsingStation].Interact.Items[DraggingItem - (Items.length + CraftingItems.length)] = null
                    }
                }
                DraggingItem = null
            } else if (DraggingItem >= Items.length + CraftingItems.length - 1 && HighlightedItem >= Items.length + CraftingItems.length - 1) {
                if (TileTypes[UsingStation].Interact.Items[HighlightedItem - (Items.length + CraftingItems.length)] != null && TileTypes[UsingStation].Interact.Items[DraggingItem - (Items.length + CraftingItems.length)] != null && (TileTypes[UsingStation].Interact.Items[HighlightedItem - (Items.length + CraftingItems.length)].ID == TileTypes[UsingStation].Interact.Items[DraggingItem - (Items.length + CraftingItems.length)].ID)) {
                    if (TileTypes[UsingStation].Interact.Items[HighlightedItem - (Items.length + CraftingItems.length)].Count + DraggingAmount > ItemTypes[TileTypes[UsingStation].Interact.Items[DraggingItem - (Items.length + CraftingItems.length)].ID].MaxStack) {
                        TileTypes[UsingStation].Interact.Items[HighlightedItem - (Items.length + CraftingItems.length)].Count = ItemTypes[TileTypes[UsingStation].Interact.Items[DraggingItem - (Items.length + CraftingItems.length)].ID].MaxStack
                        DraggingAmount -= ItemTypes[TileTypes[UsingStation].Interact.Items[DraggingItem - (Items.length + CraftingItems.length)].ID].MaxStack - TileTypes[UsingStation].Interact.Items[HighlightedItem - (Items.length + CraftingItems.length)].Count
                    } else {
                        TileTypes[UsingStation].Interact.Items[HighlightedItem - (Items.length + CraftingItems.length)].Count += DraggingAmount
                        TileTypes[UsingStation].Interact.Items[DraggingItem - (Items.length + CraftingItems.length)].Count -= DraggingAmount
                        if (TileTypes[UsingStation].Interact.Items[DraggingItem - (Items.length + CraftingItems.length)].Count <= 0) {
                            TileTypes[UsingStation].Interact.Items[DraggingItem - (Items.length + CraftingItems.length)] = null
                        }
                    }
                } else if (TileTypes[UsingStation].Interact.Items[HighlightedItem - (Items.length + CraftingItems.length)] != null) {
                    let saved = TileTypes[UsingStation].Interact.Items[DraggingItem - (Items.length + CraftingItems.length)]
                    TileTypes[UsingStation].Interact.Items[DraggingItem - (Items.length + CraftingItems.length)] = TileTypes[UsingStation].Interact.Items[HighlightedItem - (Items.length + CraftingItems.length)]
                    TileTypes[UsingStation].Interact.Items[HighlightedItem - (Items.length + CraftingItems.length)] = saved
                } else {
                    TileTypes[UsingStation].Interact.Items[HighlightedItem - (Items.length + CraftingItems.length)] = new Item(DraggingAmount, TileTypes[UsingStation].Interact.Items[DraggingItem - (Items.length + CraftingItems.length)].ID)
                    TileTypes[UsingStation].Interact.Items[DraggingItem - (Items.length + CraftingItems.length)].Count -= DraggingAmount
                    if (TileTypes[UsingStation].Interact.Items[DraggingItem - (Items.length + CraftingItems.length)].Count <= 0) {
                        TileTypes[UsingStation].Interact.Items[DraggingItem - (Items.length + CraftingItems.length)] = null
                    }
                }
                DraggingItem = null
            }
        } else if (DraggingItem == HighlightedItem) {
            DraggingAmount = Math.floor(DraggingAmount / 2)
        } else if (HighlightedItem >= Items.length) {
            if (CraftingItems[HighlightedItem - Items.length] != null && CraftingItems[HighlightedItem - Items.length].Active){
                DraggingItem = HighlightedItem
                DraggingAmount = CraftingItems[HighlightedItem - Items.length].Count
            }
        } else if (Items[HighlightedItem] != null && Items[HighlightedItem].Active){
            DraggingItem = HighlightedItem
            DraggingAmount = Items[HighlightedItem].Count
        }
    }
})
controller.down.onEvent(ControllerButtonEvent.Repeated, function() {
    let Player = GetPlayer()
    if (InInventory == false) {
        if (controller.left.isPressed()) {
            PlayerDir = 5
        } else if (controller.right.isPressed()) {
            PlayerDir = 3
        } else {
            PlayerDir = 4
        }
        EntityTypes[0][(Player.ID)].Texture = img`
            . . . . . . f f f f . . . . . .
            . . . . f f f 2 2 f f f . . . .
            . . . f f f 2 2 2 2 f f f . . .
            . . f f f e e e e e e f f f . .
            . . f f e 2 2 2 2 2 2 e e f . .
            . . f e 2 f f f f f f 2 e f . .
            . . f f f f e e e e f f f f . .
            . f f e f 4 4 4 4 4 4 f e f f .
            . f e e 4 b f d d f b 4 e e f .
            . . f e e 1 f d d f 1 e e f . .
            . . . f e e 4 4 4 4 e e f . . .
            . . e 4 f 2 2 2 2 2 2 f 4 e . .
            . . 4 d f 2 2 2 2 2 2 f d 4 . .
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . .
            . . . . . f f f f f f . . . . .
            . . . . . f f . . f f . . . . .
        `
        if (controller.A.isPressed() == false) {
            //Semi Solid Drop
        }
    }
})
let StartX = Math.randomRange(1, WorldSize.X - 2)
NewEntity(new Entity(new Position(StartX * 16, GroundAt(StartX) * 16), 0, 0))
SetupRenderer()