export class Ticket{
    constructor(
   public   request_type:String,
   public	priority:number,
   public   to_travel_city:String,
   public	from_travel_city:String,
   public	travel_start_date:Date,
   public	travel_end_date:Date,
   public	passport_number:String,
   public	project_name:String,
   public	expense_borne_by:String,
   public	travel_approver_name:String,
   public	duration_of_travel: String,
   public	upper_bound_amount : String,
   public	additional_comments : String
    ){}
}