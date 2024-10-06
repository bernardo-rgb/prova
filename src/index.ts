import 'module-alias/register';
import {Animal} from "@/class/animal";

function main(): void {
   const cachorro = new Animal("black",14,"branco")

   cachorro.print()

}
main()
