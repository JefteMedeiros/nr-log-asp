using System.ComponentModel.DataAnnotations;

namespace nr_log_asp.Models
{
	public class RegisterModel
	{
		[Key]
		public int Id { get; set; }

		[Required]
		public string NameSurname { get; set; }

		[Required]
		[StringLength(50)]
		public string UserName { get; set; }
		
		[Required]
		[StringLength(16)]
		public string Public_Id	{ get; set; }
		
		[StringLength(50)]
		[Required]
		public string Email { get; set; }

		[StringLength(50)]
		[Required]
		public string Password { get; set; }
	}
}
