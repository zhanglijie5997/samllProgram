/**
 * @author  zhangliejie
 * @version 1.0.0
 */
type Envtype = "devolpoment" | "pre" | "production"; 

const env: Envtype = "devolpoment"; 

const envMap: Map<string, string> = new Map([
  ["devolpoment", "http://192.168.0.133:8091"],
  ["pre", "https://pre.com"],
  ["production", "https://production.com"],
]) ;
/** 环境变量 
 * @returns { string } api 名称
*/
export const setting: string = envMap.get(env)!;




